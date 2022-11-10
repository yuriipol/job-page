import { Link } from 'react-router-dom';

import s from './JobList.module.scss';

const JobsList = ({ jobsList }) => {
  return (
    <ul className={s.list}>
      {jobsList.map(({ id, name, email, phone }) => (
        <li key={id} id={id} className={s.jobsListItem}>
          <Link to={`/jobs/${id}`} id={id} className={s.link}>
            <p className={s.nameText}>{name}</p>
            <p className={s.email}>{email}</p>
            <p className={s.phoneNumber}>{phone}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default JobsList;
