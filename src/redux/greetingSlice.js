import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCHRANDOMGREETING = 'greeting/fetchRandomGreeting';

export const fetchRandomGreeting = createAsyncThunk(FETCHRANDOMGREETING, async () => {
  const res = await fetch('http://127.0.0.1:3000/api/greetings/random_greeting');
  const data = await res.json();
  return data.greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.greeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;