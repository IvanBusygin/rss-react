import { Link } from 'react-router-dom';
import styles from './notFoundPage.module.scss';

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Page not found</p>
      <Link
        data-testid="go-home"
        className={styles.homeLink}
        to="/"
      >
        Go back to the main page
      </Link>
    </div>
  );
}

export default NotFoundPage;
