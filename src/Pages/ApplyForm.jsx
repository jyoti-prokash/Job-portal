import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UseAuth from '../Context/AuthContext/UseAuth'
import axios from 'axios';
import Result from 'postcss/lib/result';
import Swal from 'sweetalert2';

const ApplyForm = () => {
    const {id} = useParams();
    const {user} = UseAuth();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const cv = form.cv.value;
        const github = form.github.value;
        const linkedin = form.linkedin.value;
        const jobApplication = {
            job_id:id,
            applicant_email:user.email,
            cv,
            github,
            linkedin
        }
        axios.post("http://localhost:5000/job-application", jobApplication)
        .then(res=> {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "application submit successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/myApplication");
            }
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
      <div>
        <form onSubmit={handleSubmit} className="max-w-xl h-screen mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">CV Link</span>
            </label>
            <input
              type='url'
              placeholder="link" name='cv'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Github Link</span>
            </label>
            <input
              type="url"
              placeholder="link" name='github'
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin Link</span>
            </label>
            <input
              type="url"
              placeholder="link" name='linkedin'
              className="input input-bordered"
              required
            />
          </div>
          <button className='btn btn-primary mt-5'>Submit</button>
        </form>
      </div>
    );
};

export default ApplyForm;