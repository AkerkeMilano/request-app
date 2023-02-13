import { RadioButton } from '../RadioButton/RadioButton';
import styles from './SelectButton.module.scss';

export type SelectCityProps = {
  city: string;
  handleChange: (e: any) => void;
}
export const SelectButton: React.FC<SelectCityProps> = ({city, handleChange}) => {
  return (
    <div className={styles.selectButton}>
        <RadioButton  value="astana" title="Астана" checked={city === "astana"} handleChange={handleChange}/>
        <RadioButton  value="almaty" title="Алматы" checked={city === "almaty"} handleChange={handleChange}/>
    </div>
  );
};
