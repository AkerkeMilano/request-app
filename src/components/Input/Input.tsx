import styles from './Input.module.scss';

export type InputType = 'text' | 'email' | 'tel';

interface InputProps {
  id: string;
  name: string;
  label: string;
  type: InputType;
  placeholder: string;
  error: boolean;
  success: boolean;
}
export const Input: React.FC<InputProps> = ({ id, name, label, type, placeholder, error, success }) => {
  return (
    <input
      id={id}
      name={name}
      aria-label={label}
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${error && styles.error} ${success && styles.success}`}
    />
  );
};
