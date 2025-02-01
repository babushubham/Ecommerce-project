import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    userData: null,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        loginData:(state,action)=>{
            state.status = true;
            state.userData = action.payload;
        },
        logoutData: (state)=>{
            state.status = false;
            state.userData = null;
        }
    }

})
export const {loginData,logoutData} = authSlice.actions;
export default authSlice.reducer;