import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


 const initialState={
    list:[],
    isLoading:false,
    error:''
}
export const getcart = createAsyncThunk('getacrt', async () => {
    try {
      const response = await axios.get('http://localhost:8080/patient',{
        headers: {
            
            "authorization": localStorage.getItem("jwt")
            
          },
      });
    //   console.log(response.data)
      return response.data;
    } catch (error) {
      // Handle any errors
      throw error;
    }
  });
export const getCart=createSlice({
    name:'getCart',
    initialState,
    extraReducers:{
        [getcart.pending]:(state)=>{
            state.isLoading=true
        },
        [getcart.fulfilled]:(state,action)=>{
            state.isLoading=false
            state.list=action.payload
        },
        [getcart.rejected]:(state,action)=>{
            state.isLoading=false
            state.error=action.payload
        }

    }

})


export default getCart.reducer