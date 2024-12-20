import React, { useContext } from 'react';
import registerAnimation from '../../assets/animation/register.json'
import Lottie from 'lottie-react';

import AuthContext from '../../Context/AuthContext/AuthContext';

const Register = () => {
  const {createUser,setUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault()
    // const formData = new FormData(e.target)
    // const initialData = Object.fromEntries(formData.entries());
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    createUser(email, password)
    .then(res=>{
      setUser(res.user);
    })
    .catch(err=>{
      console.log(err.message)

    })
  }

    return (
      <div className="hero bg-base-200 min-h-96 lg:py-28">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28">
          <div className="text-center lg:text-left">
            <Lottie
              className="w-72 lg:w-80"
              animationData={registerAnimation}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text" name='name'
                  placeholder="user name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email" name='email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password" name='password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;