import { button } from 'motion/react-client';
import React from 'react';
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {
      _id,
      company_logo,
      company,
      location,
      title,
      description,
      requirements,
      salaryRange,
    } = job;
    return (
      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <div className="flex gap-4">
            <figure>
              <img className="w-12" src={company_logo} alt="logo" />
            </figure>
            <div>
              <h3>{company}</h3>
              Location {location}
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="flex flex-wrap gap-3">
              {requirements.map((skill) => (
                <button className="badge badge-secondary px-5 py-3">
                  {skill}
                </button>
              ))}
            </div>
            <p>
              Salary: {salaryRange.min} - {salaryRange.max}
            </p>
            <div className="card-actions justify-end">
              <Link to={`/jobDetails/${_id}`}>
                <button className="btn btn-primary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Job;