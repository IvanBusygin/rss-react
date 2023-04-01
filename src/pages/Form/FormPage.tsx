import { useState } from 'react';
import styles from './formPage.module.scss';
import Card from '../../UI/Card/Card';
import { IUser } from '../../types/ITypes';
import Form from '../../components/Form/Form';
import UserList from '../../components/UserList/UserList';
import Modal from '../../components/Modal/Modal';

function FormPage() {
  const [cards, setCards] = useState<IUser[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const handlerAddNewCard = (data: IUser) => {
    setCards([...cards, data]);
    setModal(true);
    setTimeout(() => setModal(false), 5000);
  };

  return (
    <>
      <div className={styles.title}>List User</div>
      <Card className={styles.form}>
        <Form onAddNewCard={handlerAddNewCard} />
      </Card>
      <UserList cards={cards} />

      <Modal isOpen={modal}>
        <p>The form has been sent</p>
      </Modal>
    </>
  );
}

export default FormPage;
