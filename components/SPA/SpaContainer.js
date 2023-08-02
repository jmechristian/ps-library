import React, { useState } from 'react';
import {
  UserIcon,
  PuzzlePieceIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';
import {
  ComputerDesktopIcon,
  ChatBubbleLeftEllipsisIcon,
  HandRaisedIcon,
  CodeBracketIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';
import SpaSyllabus from '../SPA/SpaSyllabus';
import SpaObjectives from '../SPA/SpaObjectives';
import SpaAudience from '../SPA/SpaAudience';
import SpaAbout from '../SPA/SpaAbout';

const objectives = [
  {
    objective: 'Research competitive packaging within your market.',
    icon: 'magnifyingGlassIcon',
  },
  {
    objective: 'Develop a process for ideation and experimentation.',
    icon: 'beakerIcon',
  },
  {
    objective:
      'Understand and apply design best practices through prototyping.',
    icon: 'swatchIcon',
  },
  {
    objective: 'Digitally develop a final rendering of your prototype.',
    icon: 'cubeTransparentIcon',
  },
];

const syllabus = [
  {
    title: 'Welcome',
    section: '01',
    modules: [
      {
        title: 'Navigating the Course',
      },
      {
        title: 'Course Introduction and the Design Process',
      },
      {
        title: 'Project and Schedule Review',
      },
      {
        title: 'Survey',
      },
    ],
  },
  {
    title: 'Market Research',
    section: '02',
    modules: [
      {
        title: 'Retail Audit',
      },
      {
        title: 'Elemental Analysis',
      },
      {
        title: 'Regulations',
      },
    ],
  },
  {
    title: 'Brainstorm & Ideation',
    section: '03',
    modules: [
      {
        title: '50 Ideas Ledger',
      },
      {
        title: 'Brainstorming Methods',
      },
      {
        title: 'Ideation',
      },
      {
        title: 'Prototyping',
      },
    ],
  },
  {
    title: 'Design Factors',
    section: '04',
    modules: [
      {
        title: 'Appearance',
      },
      {
        title: 'Visual',
      },
      {
        title: 'Placement',
      },
      {
        title: 'Connection',
      },
      {
        title: 'Simplicity',
      },
      {
        title: 'Ergonomics',
      },
    ],
  },
  {
    title: 'Digital Prototype',
    section: '05',
    modules: [
      {
        title: 'Design Software Tutorial',
      },
      {
        title: 'Prototype Setup',
      },
      {
        title: 'Graphics and Text',
      },
      {
        title: 'Create and Save a Virtual Prototype',
      },
      {
        title: 'Resources for Printing',
      },
    ],
  },
  {
    title: 'Conclusion',
    section: '06',
    modules: [
      {
        title: 'Course Summary',
      },
      {
        title: 'Final Survey',
      },
      {
        title: 'How to Print Your Certificate of Completion',
      },
    ],
  },
];

const SpaContainer = () => {
  const [isActive, setIsActive] = useState('ABOUT');

  const getPage = (active) => {
    switch (active) {
      case 'ABOUT':
        return <SpaAbout />;
      case 'OBJECTIVES':
        return <SpaObjectives objectives={objectives} />;
      case 'AUDIENCE':
        return <SpaAudience />;
      case 'SYLLABUS':
        return <SpaSyllabus syllabus={syllabus} />;
    }
  };

  return (
    <>
      <div className='flex justify-center items-center md:items-start w-full h-full z-30 md:pt-8 md:pl-8 lg:pt-0'>
        <div className='w-full max-w-7xl mx-auto py-4 md:py-9 xl:py-16'>
          <div className='flex px-4 lg:px-4 xl:px-0 relative gap-4 xl:gap-9'>
            <div className='hidden lg:flex flex-col gap-8 mt-2 max-w-lg h-full shadow-lg  bg-gray-800/20 rounded-lg p-4'>
              <div className='flex flex-col justify-center items-center gap-1.5'>
                <div
                  className={`w-12 h-12 xl:w-16 xl:h-16 ${
                    isActive === 'ABOUT' ? 'bg-slate-900/40' : 'bg-white/50'
                  } backdrop-blur rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-base-dark`}
                  onClick={() => setIsActive('ABOUT')}
                >
                  <LightBulbIcon className='w-8 h-8 fill-white' />
                </div>
                <div className='font-bold text-white font-greycliff'>About</div>
              </div>
              <div className='flex flex-col justify-center items-center gap-1.5'>
                <div
                  className={`w-12 h-12 xl:w-16 xl:h-16 ${
                    isActive === 'AUDIENCE' ? 'bg-slate-900/40' : 'bg-white/50'
                  } backdrop-blur rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-base-dark`}
                  onClick={() => setIsActive('AUDIENCE')}
                >
                  <UserIcon className='w-8 h-8 fill-white' />
                </div>
                <div className='font-bold text-white font-greycliff'>
                  Audience
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-1.5'>
                <div
                  className={`w-12 h-12 xl:w-16 xl:h-16 ${
                    isActive === 'OBJECTIVES'
                      ? 'bg-slate-900/40'
                      : 'bg-white/50'
                  } backdrop-blur rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-base-dark`}
                  onClick={() => setIsActive('OBJECTIVES')}
                >
                  <PuzzlePieceIcon className='w-8 h-8 fill-white' />
                </div>
                <div className='font-bold text-white font-greycliff'>
                  Objectives
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-1.5'>
                <div
                  className={`w-12 h-12 xl:w-16 xl:h-16 ${
                    isActive === 'SYLLABUS' ? 'bg-slate-900/40' : 'bg-white/50'
                  } backdrop-blur rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-base-dark`}
                  onClick={() => setIsActive('SYLLABUS')}
                >
                  <Square3Stack3DIcon className='w-8 h-8 fill-white' />
                </div>
                <div className='font-bold text-white font-greycliff'>
                  Syllabus
                </div>
              </div>
              <div className='flex flex-col justify-center items-center gap-1.5'>
                <div
                  className='w-12 h-12 xl:w-16 xl:h-16 bg-clemson cursor-pointer backdrop-blur rounded-full flex justify-center items-center shadow-lg'
                  onClick={() => {
                    gtag('event', 'workshop_register_click');
                    window.open(
                      'https://learn.packagingschool.com/courses/pack-design-workshop',
                      '_blank'
                    );
                  }}
                >
                  <TrophyIcon className='w-8 h-8 fill-white' />
                </div>
                <div className='font-bold text-white font-greycliff'>
                  Register
                </div>
              </div>
            </div>
            <div className='max-w-lg xl:max-w-xl flex flex-col gap-5 xl:gap-6 h-full p-6 rounded-xl'>
              <div className='flex flex-col gap-3'>
                <div className='flex flex-wrap gap-x-6 gap-y-3 mb-3'>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BoltIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Newly Released!
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <ComputerDesktopIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Online
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <HandRaisedIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Hands-On
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <CodeBracketIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-slate-900 text-sm'>
                      Software Provided
                    </div>
                  </div>
                </div>
                <div className='text-4xl xl:text-5xl text-slate-800 tracking-tight font-greycliff font-semibold leading-none'>
                  Pack Design Workshop
                </div>

                <div className='text-xl font-semibold text-white'>
                  <span className='font-bold'>$399</span>
                </div>
                <div className='font-medium xl:text-lg text-slate-900'>
                  Students completing the workshop will design and improve a
                  paperboard carton or corrugated container and learn how to
                  price and order production samples of their packaging.
                </div>
              </div>
              <div
                className='font-greycliff flex items-center gap-1 text-lg cursor-pointer font-semibold text-white bg-clemson shadow w-fit py-3 px-4 rounded-lg text-center lg:text-left'
                onClick={() => {
                  gtag('event', 'workshop_register_click');
                  window.open(
                    'https://learn.packagingschool.com/courses/pack-design-workshop',
                    '_blank'
                  );
                }}
              >
                <div>Enroll Now</div>
              </div>
              <div className='border-b border-b-white mt-6' />
              <div className='w-full max-w-xl mt-6' id='scrollers'>
                {getPage(isActive)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpaContainer;
