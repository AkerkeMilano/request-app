import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../..';
import { fetchRequests } from '../../store/actions/formActions';
import { TableItems } from '../../components/TableItems/TableItems';
import styles from "./RequestsList.module.scss";

export const RequestsList = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { requests } = useAppSelector((state) => state.formRequest);

  useEffect(() => {
    dispatch(fetchRequests());
  }, [dispatch]);
  console.log(requests);
  return (
    <div className={styles.requestsList}>
      <Header type="default">Все заявки</Header>
      <TableItems data={requests}/>
    </div>
  );
};
