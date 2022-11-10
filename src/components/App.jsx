import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchJobs } from 'redux/job/job-operations';

import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Jobs = lazy(() => import('../pages/Jobs/Jobs'));
const NotFound = lazy(() => import('../pages/NotFound'));
const JobsDetails = lazy(() => import('../pages/JobsDetails/JobsDetails'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
    // console.log('hello');
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:jobsId" element={<JobsDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};
