import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
