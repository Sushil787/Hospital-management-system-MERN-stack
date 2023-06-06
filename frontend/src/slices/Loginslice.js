import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action to handle login



export const loginAsync = createAsyncThunk(
    'login/loginAsync',
    async (credentials,{ rejectWithValue }) => {
        try {
            const response = await axios.post("http://localhost:8080/signin", credentials);
           
            return response.data.message
           
       
            
        } catch (error) {
           return rejectWithValue(error.response.data.message)
            
        }
    }
  );
  

// Create the login slice
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers:{
    [loginAsync.pending]:(state)=>{
        state.isLoading=true
    },
    [loginAsync.fulfilled]:(state,action)=>{
        state.isLoading=false
        state.token=action.payload
    },
    [loginAsync.rejected]:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
    }

}
});

// Export the async thunk action and the login slice reducer

export default loginSlice.reducer;

