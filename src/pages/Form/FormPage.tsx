import { useState } from 'react';
import styles from './formPage.module.scss';
import Card from '../../UI/Card/Card';
import { IUser } from '../../types/ITypes';
import Form from '../../components/Form/Form';
import UserList from '../../components/UserList/UserList';
import Modal from '../../components/Modal/Modal';

import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setFormResults } from '../../redux/slices/searchSlice';

function FormPage() {
  const dispatch = useAppDispatch();
  const { formResults } = useAppSelector((state) => state.searchState);

  const [modal, setModal] = useState<boolean>(false);

  const handlerAddNewCard = (data: IUser) => {
    dispatch(setFormResults(data));
    setModal(true);
    setTimeout(() => setModal(false), 5000);
  };

  return (
    <>
      <div className={styles.title}>List User</div>
      <Card className={styles.form}>
        <Form onAddNewCard={handlerAddNewCard} />
      </Card>
      <UserList cards={formResults} />

      <Modal isOpen={modal}>
        <p>The form has been sent</p>
      </Modal>
    </>
  );
}

export default FormPage;
