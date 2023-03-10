import React from 'react';
import LearningObjectives from './LearningObjectives';

const LessonsContent = ({ content, objectives }) => {
  const image =
    'https://packschool.s3.amazonaws.com/lessons/carbon-neutral-part-2/box2.webp';
  return (
    <div className='relative overflow-hidden bg-white dark:bg-real-dark'>
      {/* <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]'>
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
                  className='text-slate-200 dark:text-slate-200/10'
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
                  className='text-slate-200 dark:text-slate-200/10'
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
      </div> */}
      <div className='relative px-6 lg:px-8 lg:pb-16'>
        <div className='prose prose-lg md:prose-xl prose-orange dark:prose-orange mx-auto text-slate-500 dark:text-white/90'>
          <div className='md:pb-16'>
            <h3 className='font-greycliff font-bold text-3xl dark:text-white'>
              Learning Objectives
            </h3>
            <LearningObjectives objectives={objectives} />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className='bad-html'
          ></div>
          {/* <div className='py-3'>
            <button
              type='button'
              className='inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              View Full Transcript
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LessonsContent;
