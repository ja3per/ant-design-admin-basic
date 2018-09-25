import React, { Component } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import Login from '@/components/Login';
import styles from './login.less';

const { Tab, UserName, Password, Submit } = Login;

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  handleSubmit = (err, values) => {
    const { type } = this.state;
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: {
          ...values,
          type,
        },
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
          <Tab key="account" tab="Account Login">
            {login.status === 'error' &&
              login.type === 'account' &&
              !submitting &&
              this.renderMessage('Invalid Username or password')}
            <UserName name="userName" placeholder="admin/user" />
            <Password
              name="password"
              placeholder="admin/user"
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
          </Tab>
            <Submit loading={submitting}>Login</Submit>
          <div>
              <div className={styles.other}>
                  <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
                      Remember Me
                  </Checkbox>
                  <Link className={styles.register} to="#">
                      Register
                  </Link>
              </div>
          </div>
        </Login>
      </div>
    );
  }
}

export default LoginPage;
