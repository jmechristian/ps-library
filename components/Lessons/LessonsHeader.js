import React from 'react';
import BodyWrapper from '../Shared/BodyWrapper';

const LessonsHeader = () => {
  return (
    <BodyWrapper>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3'>
        <div className='flex flex-wrap gap-2'>
          <span className='inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800'>
            Sustainability
          </span>
          <span className='inline-flex items-center rounded-full bg-slate-100 px-3 py-0.5 text-sm font-medium text-slate-800'>
            Learning Of The Month
          </span>
        </div>
        <div>
          <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
            Carbon Neutral - Definition and Crediting
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-500'>
            This 2-part lesson will add context to carbon neutrality and explore
            how you can implement it into your packaging. In part 1 we define
            &#8220;carbon neutral&#8221; and look at real-world examples of
            carbon offset in the industry.
          </p>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default LessonsHeader;
