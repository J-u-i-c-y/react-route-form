import React, { Fragment, useState } from 'react';
import { Form, Input, Button, Radio, Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Registration = () => {
  const [haveChildren, setHasChildren] = useState(false);
  const [childrenCount, setCountChildren] = useState(0);
  const isValid = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Fragment>
      <Form
        name="registration"
        {...formItemLayout}
        onFinish={isValid}
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

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="family-status" label="Family status">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="married"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Married
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="divorced"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Divorced
                </Checkbox>
              </Col>
              <Col>
                <Checkbox
                  onClick={() => setHasChildren(!haveChildren)}
                  value="have children"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Have children
                  {haveChildren ?
                    <Form.Item name="children">
                      <Input
                        onChange={(e) => setCountChildren(e.target.value)}
                        value={childrenCount}
                        placeholder="How much" style={{ width: 100, marginLeft: 10 }} />
                    </Form.Item> :
                    null}
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
          <Button type="link">
            <Link to="/login">Go to Login</Link>
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Registration;