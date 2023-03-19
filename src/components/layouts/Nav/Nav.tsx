import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import styles from './nav.module.scss';

export default class Nav extends Component {
  render() {
    type IActiveLink = { isActive: boolean };
    const activeElem = ({ isActive }: IActiveLink) => (isActive ? styles.activeLink : styles.link);

    return (
      <nav className={styles.navigation}>
        <NavLink
          className={activeElem}
          to="Main"
        >
          Main
        </NavLink>
        <NavLink
          className={activeElem}
          to="About"
        >
          About Us
        </NavLink>
      </nav>
    );
  }
}
