import {
  CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR,
  FETCH_FORM_REQUEST,
  FETCH_FORM_SUCCESS,
  FETCH_FORM_ERROR,
} from '../actionType';
import { axiosUrl } from '../../axiosUrl';
import { ContactInfoType } from '../../containers/RequestForm/RequestForm';
import { AppDispatch } from '../../index';

const createFormDataRequest = () => {
  return { type: CREATE_FORM_REQUEST };
};

const createFormSuccess = () => {
  return { type: CREATE_FORM_SUCCESS };
};

const createFormError = (error: any) => {
  return { type: CREATE_FORM_ERROR, error };
};

export const createFormRequest = (formData: ContactInfoType) => {
  return async (dispatch: AppDispatch) => {
    dispatch(createFormDataRequest());
    try {
      await axiosUrl.post('/requests.json', formData);
      console.log(formData);
      dispatch(createFormSuccess());
    } catch (e) {
      dispatch(createFormError(e));
    }
  };
};

const fetchFormRequest = () => {
  return { type: FETCH_FORM_REQUEST };
};

const fetchFormSuccess = (requests: ContactInfoType[]) => {
  return { type: FETCH_FORM_SUCCESS, requests };
};

const fetchFormError = (error: any) => {
  return { type: FETCH_FORM_ERROR, error };
};

export const fetchRequests = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchFormRequest());
    try {
      const response = await axiosUrl.get('./requests.json');
      const resArr = Object.keys(response.data).map((item) => {
        return { id: item, ...response.data[item] };
      });
      dispatch(fetchFormSuccess(resArr));
    } catch (e) {
      dispatch(fetchFormError(e));
    }
  };
};
