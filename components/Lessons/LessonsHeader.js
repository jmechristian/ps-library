import React from 'react';
import BodyWrapper from '../Shared/BodyWrapper';

const LessonsHeader = ({ title, subhead, tags }) => {
  return (
    <BodyWrapper>
      <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col gap-3 lg:py-12'>
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
            {title}
          </h1>
          <p className='mt-6 text-lg leading-8 text-slate-500'>{subhead}</p>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default LessonsHeader;
