import React from 'react';
import styles from './Input.module.scss';

export type InputType = 'text' | 'email' | 'tel';

interface InputProps {
  name: string;
  label: string;
  type: InputType;
  value: string;
  placeholder: string;
  error: string;
  validation: boolean;
  onChange: (e: any) => void;
}
export const Input: React.FC<InputProps> = ({
  name,
  label,
  type,
  value,
  placeholder,
  error,
  validation,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        name={name}
        aria-label={label}
        type={type}
        value={value}
        placeholder={placeholder}
        className={`${styles.input} ${error && styles.error} ${
          !error && validation && styles.success
        }`}
        onChange={onChange}
      />
      <div className={`${styles.icon} ${error && styles.error}`}>!</div>
    </div>
  );
};
