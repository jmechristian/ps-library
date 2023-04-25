import React from 'react';
import { LockOpenIcon } from '@heroicons/react/24/solid';

const SlideBar = ({ slides, page }) => {
  return (
    <div className='flex gap-1 items-center w-full pr-1 bg-black'>
      <div className='flex items-center gap-1 w-full h-min'>
        {slides &&
          slides.map((sl, index) => (
            <div
              key={index}
              className={`h-2 ${
                page >= index ? 'bg-clemson' : 'bg-white'
              } w-full`}
            />
          ))}
      </div>
      <div>
        <LockOpenIcon className={`w-5 h-5 fill-white`} />
      </div>
    </div>
  );
};

export default SlideBar;
