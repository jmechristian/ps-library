import React from 'react';

const SpaAudience = () => {
  return (
    <div
      className='flex flex-col gap-6 px-6 lg:px-0 scroll-mt-20'
      id='audience'
    >
      <div className='font-semibold text-2xl text-gray-900 font-greycliff'>
        Who is this workshop for?
      </div>
      <p className='xl:text-lg text-gray-900'>
        This course is tailored to individuals interested in acquiring skills in
        package design and creation. From researching the category to putting
        together the design elements and building a prototype, participants gain
        a comprehensive knowledge of the package design process, from beginning
        to end.
      </p>
    </div>
  );
};

export default SpaAudience;
