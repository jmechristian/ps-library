import React from 'react';
import SpaObjective from './SpaObjective';

const SpaObjectives = ({ objectives }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5'>
        <div className='text-3xl md:text-4xl font-greycliff font-bold text-white'>
          Objectives
        </div>
        <div className='text-lg font-greycliff text-white/80'>
          By the end of this course you will have the skillset to be able to:
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        {objectives.map((obj) => (
          <div key={obj.objective}>
            <SpaObjective objective={obj.objective} icon={obj.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaObjectives;
