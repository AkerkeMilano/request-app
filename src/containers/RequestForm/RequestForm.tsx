import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { SelectButton } from '../../components/SelectButton/SelectButton';
import styles from './RequestForm.module.scss';

export type ContactInfoType = {
  name: string;
  tel: string;
  email: string;
  city: string;
}
type InputEvent = React.ChangeEvent<HTMLInputElement>;
const initialValues: ContactInfoType = {
  name: "",
  tel: "",
  email: "",
  city: "astana",
};

export const RequestForm = () => {
  const [contactInfo, setContactInfo] = useState(initialValues);
  const handleChange = (event: InputEvent) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  console.log(contactInfo);
  return (
    <div className={styles.requestForm}>
      <Header type="default">Оставить заявку</Header>
      <form className={styles.form}>
        <Input
          name="name"
          label="Name"
          type="text"
          value={contactInfo.name}
          placeholder="Ваше имя"
          error={false}
          success={false}
          onChange={handleChange}
        />
        <Input
          name="tel"
          label="Telephone"
          type="tel"
          value={contactInfo.tel}
          placeholder="Номер телефона"
          error={false}
          success={false}
          pattern={`/^[+]7[ ][0-9]{3}[ ][0-9]{3}[ ][0-9]{4}/`}
          onChange={handleChange}
        />
        <Input
          name="email"
          label="E-mail"
          type="email"
          value={contactInfo.email}
          placeholder="E-mail"
          error={false}
          success={false}
          onChange={handleChange}
        />
        <SelectButton city={contactInfo.city} handleChange={handleChange}/>
      </form>
      <Button>Отправить</Button>
    </div>
  );
};
