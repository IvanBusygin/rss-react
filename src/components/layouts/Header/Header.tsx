import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import Nav from '../Nav/Nav';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to="/">My React App</Link>
      </h1>

      <Nav />
    </header>
  );
}

export default Header;
