import React from 'react';
import LearningObjectives from './LearningObjectives';

const LessonsContent = () => {
  return (
    <div className='relative overflow-hidden bg-white'>
      <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]'>
        <div
          className='relative mx-auto h-full max-w-prose text-lg'
          aria-hidden='true'
        >
          <svg
            className='absolute top-12 left-full translate-x-32 transform'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-slate-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
            />
          </svg>
          <svg
            className='absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-slate-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
            />
          </svg>
          <svg
            className='absolute bottom-12 left-full translate-x-32 transform'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <rect
              width={404}
              height={384}
              fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
            />
          </svg>
        </div>
      </div>
      <div className='relative px-6 lg:px-8 lg:pb-16'>
        <div className='prose prose-lg prose-orange mx-auto text-slate-500'>
          <div className='pb-3'>
            <h3>Learning Objectives</h3>
            <LearningObjectives />
          </div>
          <p>
            Many public companies have set aggressive sustainability targets;
            most of which involve packaging. Now, more than ever, product
            companies are investing in reducing the environmental impacts of
            their packaging and communicating these efforts on their labels.
          </p>
          <p>
            A major component to understanding your environmental impact is the
            amount of production and discharge of carbon. So, many companies are
            asking the question &quote;How do we make carbon neutral
            packaging?&quote;
          </p>
          <div>
            <button
              type='button'
              className='inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              View Full Transcript
            </button>
          </div>
          <p>
            This is a dense topic, so{' '}
            <strong>we will be back next month</strong> with part two,
            implementation and measurement, of our study of carbon neutrality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LessonsContent;
