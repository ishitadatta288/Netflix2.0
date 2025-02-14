import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'app',  // Name of the slice
  initialState:{
    app:null,
    isLoading:false
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    setLoading:(state,action)=> {
      state.isLoading = action.payload;
    }
  },
});

export const { setUser, clearUser,setLoading } = userSlice.actions;
export default userSlice.reducer;  
