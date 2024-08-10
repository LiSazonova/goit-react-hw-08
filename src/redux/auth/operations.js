import { createAsyncThunk } from "@reduxjs/toolkit";

axios.default.baseURL = 'https://connections-api.goit.global';

// Додайте у файл redux / auth / operations.js операції, 
// оголошені за допомогою createAsyncThunk, для роботи з користувачем:

// register - для реєстрації нового користувача.
// Базовий тип екшену "auth/register".
// Використовується у компоненті RegistrationForm на сторінці реєстрації.
export const register = createAsyncThunk('auth/register', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

// login - для логіну існуючого користувача.
// Базовий тип екшену "auth/login".
// Використовується у компоненті LoginForm на сторінці логіну.

export const logIn = createAsyncThunk('auth/login', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/login');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

// logout - для виходу з додатка.
// Базовий тип екшену "auth/logout".
// Використовується у компоненті UserMenu у шапці додатку.

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

// refreshUser - оновлення користувача за токеном.
// Базовий тип екшену "auth/refresh".
// Використовується у компоненті App під час його монтування.

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/ users / current');
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})