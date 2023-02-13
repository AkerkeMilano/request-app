import React from 'react';
import styles from './Input.module.scss';

export type InputType = 'text' | 'email' | 'tel';

interface InputProps {
  name: string;
  label: string;
  type: InputType;
  value: string;
  placeholder: string;
  error: boolean;
  success: boolean;
  pattern?: string;
  onChange: (e: any) => void;
}
export const Input: React.FC<InputProps> = ({ name, label, type, value, placeholder, error, pattern, success, onChange}) => {
  return (
    <input
      name={name}
      aria-label={label}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`${styles.input} ${error && styles.error} ${success && styles.success}`}
      onChange={onChange}
      pattern={pattern}
      required
    />
  );
};
