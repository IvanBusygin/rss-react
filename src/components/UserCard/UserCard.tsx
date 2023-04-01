import { IUser } from '../../types/ITypes';
import styles from './userCard.module.scss';
import Card from '../../UI/Card/Card';

interface IUserCardProps {
  user: IUser;
}

function UserCard({ user }: IUserCardProps) {
  const { filePhoto, name, surname, birthday, switchValue, selectValue, checkboxValue } = user;

  return (
    <Card className={styles.user}>
      <div>
        <img
          className={styles.user_photo}
          src={filePhoto as string}
          alt="User"
        />
      </div>
      <div>
        <h2 className={styles.user_name}>{`${name} ${surname}`}</h2>
        <p className={styles.user_date}>{`Birthday: ${birthday}`}</p>
        <p className={styles.user_switch}>{`Level: ${switchValue}`}</p>
        <p className={styles.user_select}>{`Framework: ${selectValue}`}</p>
        <p className={styles.user_checkbox}>{`Need a job: ${checkboxValue ? 'Yes' : 'No'}`}</p>
      </div>
    </Card>
  );
}

export default UserCard;
