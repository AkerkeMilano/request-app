import { Outlet } from 'react-router-dom';
import styles from "./Layout.module.scss";
import NavigationItems from '../NavigationItems/NavigationItems';

const Layout = () => {
  return (
    <>
      <header className={styles.toolbar}>
        <nav>
          <NavigationItems />
        </nav>
      </header>
      <main className="Layout-Content">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
