import { Component } from 'react';
import styles from './formPage.module.scss';
import Card from '../../UI/Card/Card';
import { IUser } from '../../types/ITypes';
import Form from '../../components/Form/Form';
import UserList from '../../components/UserList/UserList';
import Modal from '../../components/Modal/Modal';

interface ICards {
  cards: IUser[];
  modal: boolean;
}

export default class FormPage extends Component<unknown, ICards> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      cards: [],
      modal: false,
    };
    this.handlerAddNewCard = this.handlerAddNewCard.bind(this);
  }

  handlerAddNewCard(data: IUser) {
    this.setState((predState) => {
      return {
        cards: [...predState.cards, data],
        modal: true,
      };
    });
    setTimeout(() => this.setState(() => ({ modal: false })), 5000);
  }

  render() {
    const { cards, modal } = this.state;
    return (
      <>
        <div className={styles.title}>List User</div>
        <Card className={styles.form}>
          <Form onAddNewCard={this.handlerAddNewCard} />
        </Card>
        <UserList cards={cards} />

        <Modal isOpen={modal}>
          <p>The form has been sent</p>
        </Modal>
      </>
    );
  }
}
