// import React from 'react'

// const renderContent={
//     1: (
//         <h1>
//             1
//         </h1>
//     ),
//     2: (
//         <h1>
//             2
//         </h1>
//     ),
//     3: (
//         <h1>
//             3
//         </h1>
//     ),
//     4: (
//         <h1>
//             4
//         </h1>
//     ),
// }
// const HomeInfo = ({currentStage}) => {
//   return 
//     renderContent[currentStage] || null;
// }

// export default HomeInfo



////////////////////

import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='px-8 py-4 mx-5 text-center text-white sm:text-xl sm:leading-snug neo-brutalism-blue'>
        Hi, I'm
        <span className='mx-2 font-semibold text-white'>Anurag</span>
        👋
        <br />
        A Software Engineer from India
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Let me introduce myself <br /> a quick peek into my journey, skills, and passions.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
        </Link>
      </div>
    );
  }

 if (currentStage === 3) {
  return (
    <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Here’s a quick look at my background <br /> grab my resume below.
      </p>

      <a
        href="/Anurag_Bhattacharya_Resume.pdf"
        download
        className='neo-brutalism-white neo-btn'
      >
        View My CV
        <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
      </a>
    </div>
  );
}


  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium text-center sm:text-xl'>
        Got something in mind <br/> I'm just a few keystrokes away
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='object-contain w-4 h-4' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;