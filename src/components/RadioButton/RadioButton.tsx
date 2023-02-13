import styles from './RadioButton.module.scss';

interface RadioProps {
  value: string;
  title: string;
  checked: boolean;
  handleChange: (e: any) => void;
}
export const RadioButton: React.FC<RadioProps> = ({
  value,
  title,
  checked,
  handleChange
}) => {
  return (
      <label>
        <input type="radio" name="city" value={value} checked={checked} className={styles.radioButton} onChange={handleChange}/>
        <div className={styles.box}>
          <span>{title}</span>
        </div>
      </label>
  );
};
