import { useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import Nav from '../Nav/Nav';
import withRouter from '../../../HOC/WithRouter';

interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
}

function Header({ location }: WithRouterProps) {
  const localPath = location?.pathname.slice(1);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>{localPath}</h1>
        <Nav />
      </div>
    </header>
  );
}

export default withRouter(Header);
