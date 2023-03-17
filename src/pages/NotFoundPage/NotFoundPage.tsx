import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.scss';
import MainContent from '../../UI/MainContent/MainContent';

export default function NotFoundPage() {
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
