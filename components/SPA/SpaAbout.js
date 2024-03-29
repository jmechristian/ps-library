import React from 'react';
import {
  ComputerDesktopIcon,
  ChatBubbleLeftEllipsisIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

const SpaAbout = () => {
  return (
    <div
      className='flex flex-col gap-6 px-6 lg:px-0 py-16 lg:py-0 scroll-mt-12 md:scroll-mt-20'
      id='about'
    >
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-2xl text-slate-800 font-greycliff'>
          Be a Packaging Problem Solver
        </div>
      </div>
      <p className='lg:text-lg  text-gray-900'>
        Master the fundamentals of packaging design in this immersive, online
        workshop. Work through the design process from ideation to building your
        own digital prototypes. Completing this workshop will give you a solid
        foundation of the box design process as well as some hands-on software
        training that will allow you to directly apply your newfound knowledge
        to the packaging challenges you or your company are facing today.
      </p>
    </div>
  );
};

export default SpaAbout;
