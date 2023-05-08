import React from 'react';
import SpaSyllabusItem from './SpaSyllabusItem';

const SpaSyllabus = ({ syllabus }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5'>
        <div className='text-3xl font-greycliff font-bold text-white md:text-slate-900'>
          Course Syllabus
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {syllabus.map((item) => (
          <div key={item.section}>
            <SpaSyllabusItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaSyllabus;
