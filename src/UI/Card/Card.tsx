import React, { Component } from 'react';
import cln from 'classnames';
import styles from './card.module.scss';

interface ICardProps {
  className?: string;
  children: React.ReactNode;
}

class Card extends Component<ICardProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children } = this.props;
    return <div className={cln(styles.card, className)}>{children}</div>;
  }
}

export default Card;
