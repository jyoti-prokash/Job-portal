import React from 'react';
import { motion } from "framer-motion";
import { easeOut } from 'motion';
import Lottie from 'lottie-react';
import jobs from '../../assets/animation/jobs.json'
const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className='flex-1'>
            <Lottie className='lg:w-86' animationData={jobs}></Lottie>
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 100, color: ["#962e18", "#4cc819 ", "#c81966"] }}
              transition={{
                duration: 2,
                delay: 2,
                repeat: Infinity,
                ease: easeOut,
              }}
              className="text-5xl font-bold"
            >
              Find Your Job
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;