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

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
        return thunkAPI.rejectWithValue('Token is not exist!');
    }
    try {
        setToken(savedToken);
        const { data } = await goitApi.get('/users/current');
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
})

// export const refreshUser = createAsyncThunk(
//     "auth/refresh",
//     async (_, thunkAPI) => {
//         // Reading the token from the state via getState()
//         const state = thunkAPI.getState();
//         const persistedToken = state.auth.token;

//         if (persistedToken === null) {
//             // If there is no token, exit without performing any request
//             return thunkAPI.rejectWithValue("Unable to fetch user");
//         }

//         try {
//             // If there is a token, add it to the HTTP header and perform the request
//             setAuthHeader(persistedToken);
//             const res = await axios.get("/users/current");
//             return res.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );