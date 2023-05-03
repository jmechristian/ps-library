import React from 'react';
import SpaObjective from './SpaObjective';

const SpaObjectives = ({ objectives }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5'>
        <div className='text-xl font-greycliff font-bold'>Objectives</div>
        <div className='text-lg font-greycliff'>
          By the end of this course you will have the skillset to be able to:
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4'>
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
