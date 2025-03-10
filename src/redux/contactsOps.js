// https://67cdff07125cd5af75795a84.mockapi.io/Contacts
// https://connections-api.goit.global/


// import { fetchContacts, setIsError, setIsLoading } from "./contactsSlice";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './authOps';


export const fetchData = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const { data } = await api.get('/contacts')
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await api.delete(`/contacts/${id}`)
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContact', async (body, thunkAPI) => {
    try {
        const { data } = await api.post('/contacts', body)
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