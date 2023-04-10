import { ReactNode } from 'react';
import cln from 'classnames';
import styles from './card.module.scss';

interface ICardProps {
  className?: string;
  children: ReactNode;
}

function Card(props: ICardProps) {
  const { className, children } = props;
  return <article className={cln(styles.card, className)}>{children}</article>;
}

Card.defaultProps = {
  className: '',
};

export default Card;
