import React, { Component } from 'react';
import cln from 'classnames';
import styles from './mainContent.module.scss';

interface IMainProps {
  className?: string;
  children: React.ReactNode;
}

export default class MainContent extends Component<IMainProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children } = this.props;
    return <div className={cln(styles.main, className)}>{children}</div>;
  }
}
