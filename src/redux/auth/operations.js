import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../config/goitApi";

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await goitApi.post('/users/login', credentials);
        setToken(data.token);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await goitApi.post('/users/logout');
        clearToken();
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

// export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
//     try {
//         const { data } = await goitApi.get('/users/current');
//         return data;
//     } catch (err) {
//         return thunkAPI.rejectWithValue(err.message);
//     }
// })