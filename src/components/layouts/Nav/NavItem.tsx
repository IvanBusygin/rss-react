import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

interface INavItemProps {
  route: string;
  routeName: string;
}

interface IClassArg {
  isActive: boolean;
  isPending: boolean;
}

const setActive: (arg: IClassArg) => string = ({ isActive }: IClassArg) =>
  isActive ? styles.activeLink : styles.link;

function NavItem(props: INavItemProps) {
  const { route, routeName } = props;
  return (
    <li>
      <NavLink
        to={route}
        className={setActive}
      >
        {routeName}
      </NavLink>
    </li>
  );
}

export default NavItem;
