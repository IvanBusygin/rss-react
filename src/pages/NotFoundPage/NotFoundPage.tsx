import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './notFoundPage.module.scss';
import MainContent from '../../UI/MainContent/MainContent';

export default class NotFoundPage extends Component {
  render() {
    return (
      <MainContent>
        <div className={styles.container}>
          <h1 className={styles.errorCode}>404</h1>
          <p className={styles.errorMessage}>Page not found</p>
          <Link
            className={styles.homeLink}
            to="/"
          >
            Go back to the main page
          </Link>
        </div>
      </MainContent>
    );
  }
}
