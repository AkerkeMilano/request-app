import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import styles from './SuccessInfo.module.scss';

export const SuccessInfo = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.successInfo}>
      <Header type="success">Заявка успешно отправлена!</Header>
      <div className={styles.text}>Мы свяжемся с вами в ближайшее время</div>
      <Button type="button" onClick={handleClick}>Рестарт формы</Button>
    </div>
  );
};
