import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}
export const Button: React.FC<ButtonProps> = ({ children, type,onClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
