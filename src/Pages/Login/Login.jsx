import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import loginAnimation from '../../assets/animation/login.json'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email,password)
        .then(result =>{
          // jwt 2nd step
            // const user = (result.user.email);
            // axios.post("http://localhost:5000/jwt", {email:result.user.email}, {withCredentials: true })
            // .then(res =>{
            //   console.log(res.data);
            // })
            // navigate('/')
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
      <div className="hero bg-base-200 min-h-96 lg:py-28">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-28">
          <div className="text-center lg:text-left">
            <Lottie
              className="w-72 lg:w-80"
              animationData={loginAnimation}
            ></Lottie>
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;