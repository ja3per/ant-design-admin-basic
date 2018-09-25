import React, { Fragment } from 'react';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import styles from './userlayout.less';
import logo from '../assets/logo.svg';

const links = [
  {
    key: 'rakuten',
    title: 'Rakuten',
    href: 'https://www.rakuten.com/',
  },

];

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2012-2018 Rakuten All Rights Reserved
  </Fragment>
);

class UserLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    return (
      // @TODO <DocumentTitle title={this.getPageTitle()}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" className={styles.logo} src={logo} />
                <span className={styles.title}>Customer DNA</span>
              </Link>
            </div>
            <div className={styles.desc}>Log in with INTRA account and password</div>
          </div>
          {children}
        </div>
        <GlobalFooter links={links} copyright={copyright} />
      </div>
    );
  }
}

export default UserLayout;
