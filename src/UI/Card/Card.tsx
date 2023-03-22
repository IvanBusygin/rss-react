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
    return <article className={cln(styles.card, className)}>{children}</article>;
  }
}

export default Card;
