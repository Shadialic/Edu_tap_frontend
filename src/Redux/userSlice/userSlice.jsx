import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    id:'',
    userName:'',
    phone:'',
    email:'',
    image:"",
    is_Active:'',
    is_admin:''
}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetailes:(state,action)=>{
            state.id=action.payload.id;
            state.userName=action.payload.userName;
            state.email=action.payload.email;
            state.phone=action.payload.phone;
            state.is_Active=action.payload.is_Active;
        },
        logoutDetails:(state,action)=>{
            state.id='';
            state.name='';
            state.phone='';
            state.image='';
            state.email='';

        }
    }
})

export const {setUserDetailes,logoutDetails}= userSlice.actions
export default userSlice.reducer;