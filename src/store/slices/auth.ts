import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  currentUser: localStorage.getItem('tc-currentUser') ? localStorage.getItem('tc-currentUser') : null,
  token: localStorage.getItem('tc-token') ? localStorage.getItem('token') : null
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    setCurrentUser(state, {payload}) {
      state.currentUser= payload;
      localStorage.setItem('tc-currentUser', payload)
    },

    setToken(state, {payload}) {
      state.token = payload;
      localStorage.setItem('tc-token', payload)
    },

    logout(state, {payload}) {
      state.token = null;
      state.currentUser = null;
      localStorage.removeItem('tc-currentUser')
      localStorage.removeItem('tc-token')
    }

  },
});

export const { setToken, setCurrentUser, logout } = slice.actions;

// Reducer
export default slice.reducer;

// ----------------------------------------------------------------------


