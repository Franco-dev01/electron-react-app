import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    hasError: false,
    users: [],
}


export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        createUser: (state: any, { payload }: any) => {
            state.users = payload;
        },

        getUsers: (state: any) => {
            state.loading = false;
        },
        updateUser: (state: any ,{ payload }: any) => {
            state.users = payload;
        },
        

    }
})