import React from 'react';
import {
  Button,
  Col,
  Row,
  Input,
  Select,
  Card,
  Tabs,
  Collapse,
  theme,
  Avatar,
  Radio,
  Tooltip,
  FloatButton,
} from 'antd';

import type { TabsProps } from 'antd';

import StickyBox from 'react-sticky-box';

import CardItem from './CardItem';

// import data from './data.json';

import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

export default function Index() {
  const { data, error, isLoading } = useSWR('/api/urls', fetcher);
  console.log('data - >:', data);

  const [mode, setMode] = React.useState<TabPosition>('top');

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );

  return (
    <>
      <Row>
        <Col span={20} offset={2}>
          <Card
            title="dao hang"
            className="daohang-body h-full"
            bodyStyle={{
              padding: '0 12px 8px',
              overflowY: 'auto',
              height: '680px',
            }}
            headStyle={{
              padding: '8px 12px',
            }}
            extra={
              <Radio.Group
                optionType="button"
                options={[
                  {
                    label: '左',
                    value: 'left',
                  },
                  {
                    label: '右',
                    value: 'right',
                  },
                  {
                    label: '上',
                    value: 'top',
                  },
                  {
                    label: '下',
                    value: 'bottom',
                  },
                ]}
                onChange={({ target: { value } }) => {
                  setMode(value);
                }}
                value={mode}
              />
            }
          >
            <Tabs
              defaultActiveKey="0"
              indicatorSize={30}
              renderTabBar={mode === 'top' ? renderTabBar : undefined}
              centered={mode === 'bottom'}
              tabPosition={mode}
              destroyInactiveTabPane={true}
              tabBarGutter={12}
              items={(data?.data || []).map((_: any, i: number) => {
                const id = String(i);
                return {
                  label: `${_.title}`,
                  key: id,
                  children: <CardItem data={_.children || []} />,
                };
              })}
            />
          </Card>
          <FloatButton.BackTop
            style={{
              right: '12%',
              bottom: '35%',
            }}
            visibilityHeight={0}
            target={() =>
              document.querySelector('.daohang-body .ant-card-body') as any
            }
          />
        </Col>
      </Row>
    </>
  );
}
