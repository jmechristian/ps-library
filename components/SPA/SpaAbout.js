import React from 'react';
import {
  ComputerDesktopIcon,
  ChatBubbleLeftEllipsisIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/outline';

const SpaAbout = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-3'>
        <div className='font-semibold text-2xl text-slate-800 font-greycliff'>
          Be a Packaging Problem Solver
        </div>
      </div>
      <p className='lg:text-lg lg:leading-relaxed text-slate-800 font-medium tracking-wide'>
        Master the fundementals of packaging design in this emmersive, online
        workshop. Work though the design process from ideation through building
        your own digital prototypes. You will leave this workshop with a solid
        foundation of the box design process as well as receiving hands-on&nbsp;
        <strong className='text-slate-900'>software training</strong> allowing
        you take your new knowledge and directly apply it to the packaging
        challenges yourself or your company are facing today.
      </p>
    </div>
  );
};

export default SpaAbout;
