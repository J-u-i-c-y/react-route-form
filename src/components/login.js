import React, { Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <Fragment>
      <Form
        name="login"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
          <Button type="link">
            <Link to="/registration">Go to Registration</Link>
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Login;