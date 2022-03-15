import styles from './index.less';
import { Inspector } from 'react-dev-inspector';
import React from 'react';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { BankOutlined, FormOutlined, SmileOutlined } from '@ant-design/icons';

const InspectorWrapper =
  process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

export default () => (
  <InspectorWrapper>
    <div
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname: '/articles/new',
        }}
        iconfontUrl="//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
        route={{
          routes: [
            {
              path: '/home',
              name: '个人介绍',
              icon: <SmileOutlined />,
            },
            {
              path: '/home/overview',
              name: 'blogs',
              icon: <FormOutlined />,
            },
            {
              path: '/home/search',
              name: '资源',
              icon: <BankOutlined />,
            },
          ],
        }}
      >
        <PageContainer content="欢迎使用">
          <div>Hello World</div>
        </PageContainer>
      </ProLayout>
    </div>
  </InspectorWrapper>
);
