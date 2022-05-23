import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Space, Typography, Spin, Layout} from 'antd';
import 'antd/dist/antd.min.css';

import {useElementWidth} from '../hooks/useElementWidth';
import {configFormMock} from '../mocks/form';

import {AppForm} from './form/app-form';
import {AppTable} from './table/app-table';
import {AppMap} from './map/app-map';
import {AppSlider} from './slider/app-slider';

const {Title} = Typography;
const {Header, Content} = Layout;

export function AppPage() {
  const containerRef = useRef();
  const containerWidth = useElementWidth(containerRef.current, 0);

  const [tableWidth, setTableWidth] = useState(768);
  const [mapWidth, setMapWidth] = useState(768);
  const [isLoading, setIsLoading] = useState(true);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const setWidth = useCallback(
    x => {
      if (x >= containerWidth * 0.25 && x <= containerWidth * 0.72) {
        setTableWidth(x);
        setMapWidth(containerWidth - 45 - x);
      }
    }, [containerWidth]
  );

  const onMouseDownBtn = useCallback(
    event => {
      if (event.target.id === 'slider-button-id') {
        setIsMouseDown(true);
      }
    }, []
  );

  const onMouseUpBtn = useCallback(
    event => {
      if (event.target.id === 'slider-button-id') {
        setIsMouseDown(false);
      }
    }, []
  );

  const onMouseMoveBtn = useCallback(
    event => {
      if (isMouseDown) {
        setWidth(event.clientX - 28); // 28: Btn width
      }
    }, [isMouseDown]
  );

  const onMouseOutBtn = useCallback(
    event => {
      if (event.target.id === 'container-slider') {
        setIsMouseDown(false);
      }
    }, []
  );

  useEffect(() => {
    if (containerWidth) {
      setTableWidth((containerWidth - 45) / 2);
      setMapWidth((containerWidth - 45) / 2);
      setIsLoading(false);
    }
  }, [containerWidth]);

  return (
    <Layout className={'layout'} ref={containerRef}>
      <Header style={{paddingTop: '15px'}}>
        <Title
          style={{color: '#fff'}}
          level={3}
        >
          {'Request Module'}
        </Title>
      </Header>

      <Content style={{padding: '20px'}}>
        <AppForm config={configFormMock}/>

        <div
          id={'container-slider'}
          onMouseDown={onMouseDownBtn}
          onMouseUp={onMouseUpBtn}
          onMouseMove={onMouseMoveBtn}
          onMouseOut={onMouseOutBtn}
        >
          {isLoading && <Spin size={'large'}/>}
          {!isLoading && (
            <Space align={'start'} size={0}>
              <AppTable width={tableWidth}/>
              <AppSlider isMouseDown={isMouseDown}/>
              <AppMap width={mapWidth}/>
            </Space>
          )}
        </div>
      </Content>
    </Layout>
  );
}
