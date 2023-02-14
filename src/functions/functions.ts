import { ContactInfoType } from "../containers/RequestForm/RequestForm";

export const phoneValidation = (values: ContactInfoType) => {
  const regex = /^\+7 [0-9]{3} [0-9]{3} [0-9]{4}/;
  return regex.test(values.tel);
};
export const emailValidation = (values: ContactInfoType) => {
  const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return regex.test(values.email);
};
