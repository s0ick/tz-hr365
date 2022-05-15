import React from 'react';
import {Typography} from 'antd';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import {AppForm} from './form/app-form';

import {CONFIG_FROM} from '../mocks/form';

const {Title} = Typography;
const {Header, Content} = Layout;

export function AppPage() {
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
