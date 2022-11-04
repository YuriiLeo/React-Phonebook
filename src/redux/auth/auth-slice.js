import { createSlice } from "@reduxjs/toolkit";
import { signup, logIn, logOut, current} from "./auth-operations";

const initialState = {
    user: {name: null, email: null },
    token: null,
    isLogin: false,
    loading: false,
    isLoadingUser: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [signup.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signup.rejected]: (store, {payload}) => {
            store.loading = false;
            console.log(payload.message);
            alert(payload.message)
            store.error = payload;
        },
        
        [logIn.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logIn.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [logIn.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

        [logOut.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [logOut.fulfilled]: (store) => {
            store.loading = false;
            store.user = {};
            store.token = null;
            store.isLogin = false;
        },
        [logOut.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },

        [current.pending]: (store) => {
            store.isLoadingUser = true;
            store.error = null;
        },
        [current.fulfilled]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.user = payload;
            store.isLogin = true;
        },
        [current.rejected]: (store, {payload}) => {
            store.isLoadingUser = false;
            store.error = payload;
        },
    }
})

export default authSlice.reducer;