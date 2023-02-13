import React from "react";
import styles from "./Header.module.scss";

interface HeaderProps {
  type: string;
  children: React.ReactNode;
}
export const Header: React.FC<HeaderProps> = ({type, children}) => {
  return (
    <h1 className={`${styles.h1} ${type === "success" && styles.success}`}>
        {children}
    </h1>
  );
};
