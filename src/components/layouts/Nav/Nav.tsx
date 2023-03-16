import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

export default function Nav() {
  type IActiveLink = { isActive: boolean };
  const activeElem = ({ isActive }: IActiveLink) => (isActive ? styles.activeLink : styles.link);

  return (
    <nav className={styles.navigation}>
      <NavLink
        className={activeElem}
        to="/"
      >
        Main
      </NavLink>
      <NavLink
        className={activeElem}
        to="about"
      >
        About Us
      </NavLink>
    </nav>
  );
}
