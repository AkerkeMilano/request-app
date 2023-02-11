import { RadioButton } from '../RadioButton/RadioButton';
import styles from './SelectButton.module.scss';

interface SelectProps {

}
export const SelectButton: React.FC<SelectProps> = () => {
  return (
    <div className={styles.selectButton}>
        <RadioButton  value="almaty" title="Алматы"/>
        <RadioButton  value="astana" title="Астана"/>
    </div>
  );
};
