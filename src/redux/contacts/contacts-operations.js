// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.baseURL = "https://reviews-server1.herokuapp.com/api";

const fetchContacts = (credentials) => async (dispatch) => {
  dispatch(actions.fetchContactRequest());

  try {
    const { data } = await axios.post("/users/review", credentials);
    dispatch(actions.fetchContactSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  fetchContacts,
};
