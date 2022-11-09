import { createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './job-operations';

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  extraReducers: {
    [fetchJobs.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchJobs.fulfilled]: (store, { payload }) => {
      store.jobs = payload;
      store.loading = false;
    },
    [fetchJobs.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default jobsSlice.reducer;
