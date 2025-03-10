// https://67cdff07125cd5af75795a84.mockapi.io/Contacts

// import { fetchContacts, setIsError, setIsLoading } from "./contactsSlice";
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://67cdff07125cd5af75795a84.mockapi.io';

export const fetchData = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/Contacts')
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/Contacts/${id}`)
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const { data } = await axios.post('/Contacts', body)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

// замість санк
// export const fetchData = () => async dispatch => {
//     try {
//         dispatch(setIsError(false))
//         dispatch(setIsLoading(true))
//         const response = await axios.get('https://67cdff07125cd5af75795a84.mockapi.io/Contacts');
//         dispatch(fetchContacts(response.data))
//     } catch (error) {
//         dispatch(setIsError(true))
//     }
//     finally {
//         dispatch(setIsLoading(false))
//     }
// };