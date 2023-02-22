import React from 'react';

const LessonActivityModal = ({ title }) => {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 px-6 py-12 md:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16'>
      <h2 className='mx-auto max-w-3xl text-3xl md:text-4xl font-bold tracking-tight text-white'>
        Join The Package Design Industry{' '}
        <span className='text-blue-500'>Thought Leaders.</span>
      </h2>
      <p className='mx-auto mt-6 max-w-xl leading-7 text-gray-300 text-base md:text-lg'>
        Collaborate with a community dedicated to bringing companies, subject
        matter experts and associations together to create a shared learning
        management system across all facts of packaging and processing.
      </p>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]'
        aria-hidden='true'
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill='url(#827591b1-ce8c-4110-b064-7cb85a0b1217)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='827591b1-ce8c-4110-b064-7cb85a0b1217'>
            <stop stopColor='#7775D6' />
            <stop offset={1} stopColor='#E935C1' />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default LessonActivityModal;
