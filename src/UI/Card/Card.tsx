import React from 'react';
import cln from 'classnames';
import styles from './card.module.scss';

interface ICardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card(props: ICardProps) {
  const { className, children } = props;
  return <div className={cln(styles.card, className)}>{children}</div>;
}

Card.defaultProps = {
  className: '',
};
