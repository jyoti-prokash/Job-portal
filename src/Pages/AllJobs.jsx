import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Job from '../Components/Job';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:5000/jobs")
        .then(data=>{
            setJobs(data.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }, [])
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {jobs.map((job) => (
            <Job key={job._id} job={job}></Job>
          ))}
        </div>
      </div>
    );
};

export default AllJobs;