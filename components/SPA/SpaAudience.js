import React from 'react';

const SpaAudience = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-6 py-3'>
        <div className='flex flex-col md:flex-row md:items-center gap-6 md:gap-8'>
          <div className='w-32 h-32 rounded-full ring-slate-300/80 ring-8 shadow-md bg-white'></div>
          <div className='text-3xl md:text-4xl font-greycliff font-bold text-white/70'>
            Who is this course for?
          </div>
        </div>
        <div className='text-xl font-greycliff text-white leading-normal font-medium tracking-wide'>
          This course is tailored to individuals interested in acquiring skills
          on package design and creation. From researching the category, through
          putting together all design elements, to building a prototype,
          participants gain comprehensive knowledge of the entire process, from
          beginning to end.
        </div>
      </div>
    </div>
  );
};

export default SpaAudience;
