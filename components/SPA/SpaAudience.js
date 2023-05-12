import React from 'react';

const SpaAudience = () => {
  return (
    <div className='flex flex-col gap-6'>
      <div className='font-semibold text-2xl text-slate-800 font-greycliff'>
        Who is this workshop for?
      </div>
      <p className='lg:text-lg lg:leading-relaxed tracking-wide text-slate-800 font-medium'>
        This course is tailored to individuals interested in acquiring skills on
        package design and creation. From researching the category, through
        putting together all design elements, to building a prototype,
        participants gain comprehensive knowledge of the entire process, from
        beginning to end.
      </p>
    </div>
  );
};

export default SpaAudience;
