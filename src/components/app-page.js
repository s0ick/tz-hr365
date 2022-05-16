import React from 'react';
import {Typography} from 'antd';
import {Layout} from 'antd';
import 'antd/dist/antd.css';

import {CONFIG_FROM} from '../mocks/form';

import {AppForm} from './form/app-form';
import {AppTable} from './table/app-table';

const {Title} = Typography;
const {Header, Content} = Layout;

export function AppPage() {
  return (
    <Layout className={'layout'}>
      <Header style={{paddingTop: '15px'}}>
        <Title
          style={{color: '#fff'}}
          level={3}
        >
          {'Request Module'}
        </Title>
      </Header>

      <Content style={{padding: '20px'}}>
        <AppForm config={CONFIG_FROM}/>
      </Content>

      <Content style={{padding: '20px', backgroundColor: '#fff'}}>
        <AppTable/>
      </Content>
    </Layout>
  );
}
