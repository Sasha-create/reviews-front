// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.BASE_URL = "https://reviews-server1.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.post("/api/users/review");
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
};
