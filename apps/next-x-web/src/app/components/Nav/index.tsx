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
} from 'antd';

import { SearchOutlined, CaretRightOutlined } from '@ant-design/icons';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const getItems = (panelStyle: any) => [
  {
    key: '1',
    label: 'This is panel header 1',
    children: (
      <>
        <Card style={{ width: 300 }}>
          <Avatar
            style={{
              verticalAlign: 'middle',
            }}
            size="large"
          >
            aaaa
          </Avatar>
          165165161651
        </Card>
      </>
    ),
    style: panelStyle,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

function Item() {
  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    />
  );
}

export default function Index() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [mode, setMode] = React.useState<TabPosition>('left');

  return (
    <>
      <Row>
        <Col span={16} offset={4}>
          <Card
            title="dao hang"
            className="h-full "
            bodyStyle={{
              padding: '40px 12px',
              overflowY: 'auto',
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
                    label: '上',
                    value: 'top',
                  },
                  {
                    label: '右',
                    value: 'right',
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
              defaultActiveKey="1"
              tabPosition={mode}
              style={{
              }}
              items={new Array(30).fill(null).map((_, i) => {
                const id = String(i);
                return {
                  label: `Tab-${id}`,
                  key: id,
                  children: <Item />,
                };
              })}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
