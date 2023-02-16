import { NavLink, useLocation } from 'react-router-dom';
import styles from "./NavigationItems.module.scss";

const NavigationItems = () => {
  const location = useLocation();
  return (
    <ul className={styles.navigationItems}>
      <NavLink className={({isActive}) => (isActive || location.pathname === "/success" ? styles.active : styles["not-active"])} to="/">
        Оставить заявку
      </NavLink>
      <NavLink className={({isActive}) => (isActive ? styles.active : styles["not-active"])} to="/requests">Список заявок</NavLink>
    </ul>
  );
};

export default NavigationItems;
