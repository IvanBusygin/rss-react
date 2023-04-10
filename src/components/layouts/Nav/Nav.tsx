import styles from './nav.module.scss';
import NavItem from './NavItem';

const routes: { [key: string]: string } = {
  '/Main': 'Main',
  '/About': 'About Me',
  '/Form': 'Form',
};

const routesKeys = Object.keys(routes);

function Nav() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.ul}>
        {routesKeys.map((key) => (
          <NavItem
            key={key}
            route={key}
            routeName={routes[key]}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
