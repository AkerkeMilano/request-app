import styles from './RadioButton.module.scss';

interface RadioProps {
  value: string;
  title: string;
}
export const RadioButton: React.FC<RadioProps> = ({
  value,
  title,
}) => {
  return (
      <label>
        <input type="radio" name="radio" value={value} className={styles.radioButton}/>
        <div className={styles.box}>
          <span>{title}</span>
        </div>
      </label>
  );
};
