import axios from "axios";

export const axiosUrl = axios.create({
  baseURL: "https://requestapp-81ef5-default-rtdb.firebaseio.com/"
});