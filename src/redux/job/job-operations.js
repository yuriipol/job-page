import { createAsyncThunk } from '@reduxjs/toolkit';

import { getJob } from 'shared/api-job';

export const fetchJobs = createAsyncThunk(
  'jobs/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getJob();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
