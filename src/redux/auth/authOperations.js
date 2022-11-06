import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { register, login, logout, getCurrentUser } from "../../shared/api/authorization";

// import * as api from "../../api/authorization";

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const result = await register(data);
            console.log("result", result);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const result = await login(data);
            console.log("result", result);
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            const result = await logout();
            return result;
        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const current = createAsyncThunk(
    "auth/current",
    async (_, thunkAPI) => {
        try {
            const { auth } = thunkAPI.getState();
            const result = await getCurrentUser(auth.token);
            console.log(result);
            return result;

        } catch ({ response }) {
            const error = {
                status: response.status,
                message: response.data.message,
            }
            return thunkAPI.rejectWithValue(error);
        }
    }
)