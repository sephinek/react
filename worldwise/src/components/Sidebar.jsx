import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import { Outlet, useOutletContext } from 'react-router-dom';

export default function Sidebar() {
  const [cities, isLoading] = useOutletContext();

  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet context={[cities, isLoading]} />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}
