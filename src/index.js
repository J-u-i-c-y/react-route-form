import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registration';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

// ========================================

render(<App />, document.getElementById('root'));
