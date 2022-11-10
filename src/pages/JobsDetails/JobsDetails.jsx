import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const JobsDetails = () => {
  const { jobsId } = useParams();
  const jobsList = useSelector(store => store.data.jobs);
  const findJob = jobsList.find(item => item.id === jobsId);
  console.log(findJob);
  const { pictures } = findJob;
  return (
    <div>
      <h1>DETAILS from {jobsId}</h1>
      <img src={pictures[1]} alt="discription" />
    </div>
  );
};

export default JobsDetails;
