import { useDispatch } from 'react-redux';
import { fetchJobs } from 'redux/job/job-operations';
import { getJob } from 'shared/api-job';

export const App = () => {
  const dispatch = useDispatch();

  const request = () => {
    dispatch(fetchJobs());
  };

  return (
    <div>
      <button type="button" onClick={request}>
        JOBS
      </button>
      <button type="button" onClick={() => getJob()}>
        13123
      </button>
    </div>
  );
};
