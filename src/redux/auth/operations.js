import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitApi } from "../../config/goitApi";

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/signup', credentials);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/login', credentials);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/ users / current');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})