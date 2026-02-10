import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:[],
}

const userSlice = createSlice({
    name:'Users',
    initialState,
    reducers:{

    }
})

const {} = userSlice.actions
export default userSlice.reducer