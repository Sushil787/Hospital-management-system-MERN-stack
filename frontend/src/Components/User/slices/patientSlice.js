import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


 const initialState={
    list:[],
    isLoading:false,
    error:''
}
export const getpatient = createAsyncThunk('getacrt', async () => {
    try {
      const response = await axios.get('http://localhost:8080/patient',{
        headers: {
            
            "authorization": localStorage.getItem("jwt")
            
          },
      });
    
      return response.data;
    } catch (error) {
      
      throw error;
    }
  });
export const getPatients=createSlice({
    name:'getCart',
    initialState,
    extraReducers:{
        [getpatient.pending]:(state)=>{
            state.isLoading=true
        },
        [getpatient.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.list=action.payload
        },
        [getpatient.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getPatients.reducer