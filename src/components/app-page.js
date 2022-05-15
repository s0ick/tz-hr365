import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Typography} from 'antd';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import {useIsFirstRender} from '../hooks/useIsFirstRender';
import {setTable} from '../redux/reducers/table.reducer';
import {CONFIG_FROM} from '../mocks/form';
import {TABLE_MOCK} from '../mocks/table';

import {AppForm} from './form/app-form';

const {Title} = Typography;
const {Header, Content} = Layout;

export function AppPage() {
  const isFirstRender = useIsFirstRender();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirstRender) {
      dispatch(setTable(TABLE_MOCK));
    }
  }, [dispatch, isFirstRender])

  return (
    <Layout className={'layout'}>
      <Header style={{paddingTop: '10px'}}>
        <Title
          style={{color: '#fff'}}
          level={2}
        >
          {'Request Module'}
        </Title>
      </Header>

      <Content style={{padding: '20px'}}>
        <AppForm config={CONFIG_FROM}/>
      </Content>
    </Layout>
  );
}
