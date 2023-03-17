import React from 'react';
import cln from 'classnames';
import styles from './mainContent.module.scss';

interface IMainProps {
  className?: string;
  children: React.ReactNode;
}

export default function MainContent(props: IMainProps) {
  const { className, children } = props;
  return <div className={cln(styles.main, className)}>{children}</div>;
}

MainContent.defaultProps = {
  className: '',
};
