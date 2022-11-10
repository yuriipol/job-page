import s from './Jobs.module.scss';
import JobsList from 'components/JobsList';
import { useSelector } from 'react-redux';
const Jobs = () => {
  const jobsList = useSelector(store => store.data.jobs);

  // console.log(jobsList);

  return (
    <div>
      <h1 className={s.page}>Jobs page</h1>
      <JobsList jobsList={jobsList} />
    </div>
  );
};

export default Jobs;
