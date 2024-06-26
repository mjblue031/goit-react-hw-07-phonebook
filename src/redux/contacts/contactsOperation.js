import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

//mockAPI.io
axios.defaults.baseURL = 'https://663ca96317145c4d8c372794.mockapi.io';

//operations

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
      try {
        const response = await axios.get('/contacts');
        console.log(response.data);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  /*
   * POST @ /contacts
   * body: { name, number }
   */
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', { name, number });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  /*
   * DELETE @ /contacts/:id
   */
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );