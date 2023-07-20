// src/App.js

import React from 'react';
import { Row, Col } from 'antd';
import RoutesTable from './components/RoutesTable';
import RoutesMap from './components/RoutesMap';

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Row gutter={16}>
        {/* Left Side White Component */}
        <Col xs={24} md={8}>
          <RoutesTable />
        </Col>

        {/* Right Side Map */}
        <Col xs={24} md={16}>
          <RoutesMap />
        </Col>
      </Row>
    </div>
  );
};

export default App;
