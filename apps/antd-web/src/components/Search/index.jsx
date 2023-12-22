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
} from 'antd';
import { SearchOutlined, CaretRightOutlined } from '@ant-design/icons';

export default function Index() {
  return (
    <>
      <Select
        defaultValue="lucy"
        style={{
          margin: '60px auto 80px',
          width: '40%',
          display: 'block',
        }}
        onChange={() => {}}
        suffixIcon={<SearchOutlined />}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </>
  );
}
