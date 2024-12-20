import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const {_id,company, company_logo, description,hr_email,hr_name,location,applicationDeadline, jobType, requirements,responsibilities, salaryRange,status,title,} = jobDetails;
    return (
      <div className="card bg-base-100 mx-auto max-w-4xl">
        <h2 className="font-bold text-2xl">{title}</h2>
        <div className="flex gap-5">
          <figure>
            <img src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2>{company}</h2>
            <p>{location}</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>
            <span className="font-bold">Deadline:</span> {applicationDeadline}
          </p>
          <p>
            <span className="font-bold">Salary Range:</span> {salaryRange.min} -{" "}
            {salaryRange.max} {salaryRange.currency}
          </p>
          <span className="font-bold">Responsibilities:</span>
          {responsibilities.map((res, idx) => (
            <p key={idx}>{res}</p>
          ))}
          <span className="font-bold">Requirements:</span>
          {requirements.map((req, idx) => (
            <p className="badge badge-secondary badge-outline" key={idx}>
              {req}
            </p>
          ))}
          <h2 className="font-bold">Hr Name and email:</h2>
          <p>{hr_name}</p>
          <p>{hr_email}</p>
          <div className="card-actions justify-end">
            <Link to={`/applyForm/${_id}`}>
              <button className="btn btn-primary">Apply Now</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default JobDetails;