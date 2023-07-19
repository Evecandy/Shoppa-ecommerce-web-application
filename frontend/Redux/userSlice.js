
import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:[],
        isFetching:false,
        error:false
    },
    reducers:{
        signinStart:(state)=>{
       state.isFetching = true;
        },
        signinSuccess:(state,action)=>{
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        signinFailure:(state)=>{
            state.isFetching = false;
            state.error = true
        },
        signOut: (state) => {
            state.user = null;
    },
    userStart:(state)=>{
        state.isFetching = true;
         },
         userSuccess:(state,action)=>{
             state.isFetching = false;
             state.user = action.payload;
             state.error = false;
         },
         userFailure:(state)=>{
             state.isFetching = false;
             state.error = true
         },
    }
})
export const {signinStart,signinSuccess,signinFailure,signOut, userStart,userSuccess,userFailure} = userSlice.actions;
export default userSlice.reducer;