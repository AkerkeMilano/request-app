import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../..';
import { fetchRequests } from '../../store/actions/formActions';

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
    <div>
      <Header type="default">Все заявки</Header>
    </div>
  );
};
