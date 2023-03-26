/* eslint-disable react/no-array-index-key */
import styles from './userList.module.scss';
import UserCard from '../UserCard/UserCard';
import { IUser } from '../../types/ITypes';

interface IFormList {
  cards: IUser[];
}

export default function UserList(props: IFormList) {
  const { cards } = props;

  return (
    <div className={styles.cardsList}>
      {cards.map((card, index) => (
        <UserCard
          key={index}
          user={card}
        />
      ))}
    </div>
  );
}
