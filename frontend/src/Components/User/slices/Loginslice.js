// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// // Async thunk action to handle login



// export const loginAsync = createAsyncThunk(
//     'login/loginAsync',
//     async (credentials,{ rejectWithValue }) => {
//         try {
//             const response = await axios.post("http://localhost:8080/signin", credentials);
//             console.log(response)
//             if(response.data.message.token!==undefined){
//               localStorage.setItem("jwt",response.data.message.token)
//             }
           
//             return response.data.message
            
           
       
            
//         } catch (error) {
//            return rejectWithValue(error.response.data.message)
            
//         }
//     }
//   );
  

// // Create the login slice
// const loginSlice = createSlice({
//   name: 'login',
//   initialState: {
//     token: null,
//     isLoading: false,
//     error: null,
//     is_admin:false,
//   },
//   reducers: {},
//   extraReducers:{
//     [loginAsync.pending]:(state)=>{
//         state.isLoading=true
//     },
//     [loginAsync.fulfilled]:(state,action)=>{
//         state.isLoading=false
//         const  {token,role}=action.payload
//         state.token=action.payload.token
//         state.role=action.payload.role
//     },
//     [loginAsync.rejected]:(state,action)=>{
//         state.isLoading=false
//         state.error=action.payload
//     }

// }
// });

// // Export the async thunk action and the login slice reducer

// export default loginSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const TOKEN_EXPIRATION_TIME = 5 * 60 * 60 * 1000; // 5 hours in milliseconds
const  TOKEN_EXPIRATION_TIME=1*60*1000;

// Async thunk action to handle login
export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/signin", credentials);
      console.log(response.data)
      if (response.data.token !== undefined) {
        const expirationTime = new Date().getTime() + TOKEN_EXPIRATION_TIME;
        localStorage.setItem("jwt", response.data.token);
        localStorage.setItem("is_admin", response.data.user.is_admin);
        localStorage.setItem("jwtExpiration", expirationTime);
      }

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Check if the token has expired
const isTokenExpired = () => {
  const currentTime = new Date().getTime();
  const storedExpirationTime = localStorage.getItem("jwtExpiration");
  return storedExpirationTime && currentTime > storedExpirationTime;
};

// Create the login slice
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    isLoading: false,
    error: null,
    user:{}
  },
  reducers: {
    logout:(state,action)=>{
      localStorage.removeItem("jwt")
      localStorage.removeItem("is_admin")
    }
  },
  extraReducers: {
    [loginAsync.pending]: (state) => {
      state.isLoading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
     
      state.token = action.payload.token
      state.user=action.payload.user
      
    },
    [loginAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Handle token expiration check on login slice initialization
if (isTokenExpired()) {
  localStorage.removeItem("jwt");
  localStorage.removeItem("jwtExpiration");
  localStorage.removeItem("is_admin");
}
// } else {
//   const token = localStorage.getItem("jwt");
//   loginSlice.initialState.token = token;
// }

// Export the async thunk action and the login slice reducer
export default loginSlice.reducer
export const  {logout}=loginSlice.actions


