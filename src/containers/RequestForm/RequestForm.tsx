import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import { Button } from '../../components/Button/Button';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { SelectButton } from '../../components/SelectButton/SelectButton';
import { emailValidation, phoneValidation } from '../../functions/functions';
import styles from './RequestForm.module.scss';
import { createFormRequest } from '../../store/actions/formActions';
import { AppDispatch } from '../..';
export interface ContactInfoType {
  name: string;
  tel: string;
  email: string;
  city: string;
  createdDate: Date;
}

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const initialValues: ContactInfoType = {
  name: '',
  tel: '',
  email: '',
  city: 'astana',
  createdDate: new Date()
};

export interface ErrorsType {
  name: string;
  tel: string;
  email: string;
}
const errorsValues: ErrorsType = {
  name: '',
  tel: '',
  email: '',
};

export const RequestForm = () => {
  const [contactInfo, setContactInfo] = useState(initialValues);
  const handleChange = (event: InputEvent) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const [formErrors, setFormErrors] = useState(errorsValues);
  const [validState, setValidState] = useState(false);

  const validateInputs = (values: ContactInfoType) => {
    let formIsValid = true;
    let k: keyof typeof values;
    const errors: any = {};
    for (k in values) {
      if (!values[k]) {
        errors[k] = 'Пустое поле, введите данные!';
        formIsValid = false;
      }
    }
    if (!phoneValidation(values)) {
      errors['tel'] = 'Неправильный номер телефона!';
      formIsValid = false;
    }
    if (!emailValidation(values)) {
      errors['email'] = 'Неправильный адрес почты!';
      formIsValid = false;
    }
    setFormErrors(errors);
    setValidState(true);
    return formIsValid;
  };
  const navigate = useNavigate();
  const navigateSuccess = () => {
    navigate("/success");
  };

  const useAppDispatch: () => AppDispatch = useDispatch;
const dispatch = useAppDispatch();

  const submitForm = (e: any) => {
    e.preventDefault();
    if(validateInputs(contactInfo)){
      dispatch(createFormRequest(contactInfo));
      navigateSuccess();
    }
    // validateInputs(contactInfo);
    // if(Object.keys(formErrors).length === 0){
      
    // }
  };
  return (
    <div className={styles.requestForm}>
      <Header type="default">Оставить заявку</Header>
      <form className={styles.form} onSubmit={submitForm}>
        <Input
          name="name"
          label="Name"
          type="text"
          value={contactInfo.name}
          placeholder="Ваше имя"
          error={formErrors.name}
          validation={validState}
          onChange={handleChange}
        />
        <Input
          name="tel"
          label="Telephone"
          type="tel"
          value={contactInfo.tel}
          placeholder="Номер телефона"
          error={formErrors.tel}
          validation={validState}
          onChange={handleChange}
        />
        <Input
          name="email"
          label="E-mail"
          type="text"
          value={contactInfo.email}
          placeholder="E-mail"
          error={formErrors.email}
          validation={validState}
          onChange={handleChange}
        />
        <SelectButton city={contactInfo.city} handleChange={handleChange} />
        <Button type="submit">Отправить</Button>
      </form>
      <div className={styles.policy}>
        Нажимая на кнопку, вы соглашаетесь с{' '}
        <a href="https://musan.kz" target="_blank" rel="noreferrer">политикой конфиденциальности</a>
      </div>
    </div>
  );
};
