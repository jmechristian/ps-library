import React from 'react';
import SpaSyllabusItem from './SpaSyllabusItem';

const SpaSyllabus = ({ syllabus }) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='flex flex-col gap-1.5'>
        <div className='text-2xl font-greycliff font-semibold text-white md:text-slate-900'>
          Course Syllabus
        </div>
        <div className='text-lg font-greycliff text-white/80 md:text-slate-900'>
          This self-paced workshop will lead you through the following:
        </div>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-3 w-full'>
          <SpaSyllabusItem item={syllabus[0]} />
          <SpaSyllabusItem item={syllabus[2]} />
          <SpaSyllabusItem item={syllabus[4]} />
        </div>
        <div className='flex flex-col gap-3'>
          <SpaSyllabusItem item={syllabus[1]} />
          <SpaSyllabusItem item={syllabus[3]} />
          <SpaSyllabusItem item={syllabus[5]} />
        </div>
      </div>
      {/* <div className='grid lg:grid-cols-2 gap-4'>
        {syllabus &&
          syllabus.map((item) => (
            <div key={item.section}>
              <SpaSyllabusItem item={item} />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default SpaSyllabus;
