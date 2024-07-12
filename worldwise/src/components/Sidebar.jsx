import { Outlet } from 'react-router-dom';
import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import { useCities } from '../contexts/CitiesContext';

export default function Sidebar() {
  const { cities, isLoading } = useCities();

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
