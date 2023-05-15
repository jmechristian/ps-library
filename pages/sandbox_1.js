import { Suspense, useRef, useEffect, useState, useCallback } from 'react';
import {
  UserIcon,
  PuzzlePieceIcon,
  Square3Stack3DIcon,
  TrophyIcon,
  LightBulbIcon,
  BoltIcon,
} from '@heroicons/react/24/solid';
import SpaSyllabus from '../components/SPA/SpaSyllabus';
import SpaObjectives from '../components/SPA/SpaObjectives';
import SpaAudience from '../components/SPA/SpaAudience';
import SpaAbout from '../components/SPA/SpaAbout';

const objectives = [
  {
    objective: 'Research competetive packaging within your market.',
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
    objective: 'Digitally develop a final rendering of your prototype .',
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
        title: 'Project and schedule review',
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
        title: 'Box It Now Tutorial',
      },
      {
        title: 'Prototype setup with Box it Now',
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
        title: 'Final Exam',
      },
      {
        title: 'How to Print Your Certificate of Completion',
      },
    ],
  },
];

const Page = () => {
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
    <div className='h-full min-h-[800] bg-slate-400/60'>
      <div className='w-full full-height relative'>
        <div
          className='absolute top-0 left-0 right-0 z-0 bg-cover md:bg-right full-height'
          style={{ backgroundImage: `url('/102-final.webp')` }}
        >
          {/* <Canvas
            camera={{
              fov: 60,
              near: 0.1,
              far: 1000,
              position: [3, 6, 9],
              rotation: [-0.5, 0.5, 0],
            }}
            shadows
          >
            <ambientLight intensity={0.25} />
            <pointLight position={[2, 5, 1]} intensity={1.25} />

            <color attach='background' args={['#0000g']} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Canvas> */}
        </div>
        <div className='md:absolute top-0 left-0 right-0 bottom-0'>
          <div className='w-full max-w-7xl mx-auto py-4 md:py-9 lg:py-12'>
            <div className='flex gap-6 px-4 lg:px-4 xl:px-0'>
              <div className='hidden md:flex flex-col gap-6 mt-2 max-w-lg'>
                <div className='flex flex-col justify-center items-center gap-1.5'>
                  <div
                    className={`w-16 h-16 ${
                      isActive === 'ABOUT' ? 'bg-slate-900/40' : 'bg-white/50'
                    } backdrop-blur rounded-full flex justify-center items-center shadow-lg cursor-pointer hover:bg-base-dark`}
                    onClick={() => setIsActive('ABOUT')}
                  >
                    <LightBulbIcon className='w-8 h-8 fill-white' />
                  </div>
                  <div className='font-bold text-white font-greycliff'>
                    About
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-1.5'>
                  <div
                    className={`w-16 h-16 ${
                      isActive === 'AUDIENCE'
                        ? 'bg-slate-900/40'
                        : 'bg-white/50'
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
                    className={`w-16 h-16 ${
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
                    className={`w-16 h-16 ${
                      isActive === 'SYLLABUS'
                        ? 'bg-slate-900/40'
                        : 'bg-white/50'
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
                    className='w-16 h-16 bg-clemson cursor-pointer backdrop-blur rounded-full flex justify-center items-center shadow-lg'
                    onClick={() => {
                      gtag('event', 'workshop_register_click');
                      window.open(
                        'https://learn.packagingschool.com/courses/pack-design-workshop?coupon=summer2023',
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
              <div
                className='max-w-2xl flex flex-col gap-5 lg:gap-10 bg-white/30 md:min-w-[625px] lg:w-[700px] min-h-[600px] p-6 lg:p-12 rounded-xl backdrop-blur-lg shadow-lg'
                id='scrollers'
              >
                <div className='flex flex-col gap-4'>
                  <div
                    className='font-greycliff flex items-center gap-1 text-medium font-semibold text-white bg-clemson shadow w-fit py-2 px-4 rounded-lg text-center lg:text-left'
                    onClick={() => {
                      gtag('event', 'workshop_register_click');
                      window.open(
                        'https://learn.packagingschool.com/courses/pack-design-workshop?coupon=summer2023',
                        '_blank'
                      );
                    }}
                  >
                    <div>
                      <BoltIcon className='w-4 h-4 fill-white' />
                    </div>
                    <div>Save 10% Pre-Register By June 15</div>
                  </div>

                  <div className='text-4xl lg:text-5xl text-slate-800 font-greycliff font-semibold'>
                    PackDesign Workshop
                  </div>
                  <div className='text-lg font-semibold text-white'>
                    <span className='line-through text-white/60'>$1200</span>
                    &nbsp;{' '}
                    <span className='font-bold'>$1080 (Till June 15!)</span>
                    <div className='font-medium text-base text-slate-900'>
                      Students completing the workshop will design and improve a
                      paperboard carton or corrugated container and receive
                      their physical prototype via mail.
                    </div>
                  </div>
                </div>
                <div className='border-b border-b-slate-400' />
                <div className='w-full h-full max-w-xl'>
                  {getPage(isActive)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='fixed lg:hidden bottom-0 left-0 right-0 h-16 bg-black'>
          <div className='flex gap-3 flex-nowrap overflow-scroll px-4 h-full items-center text-sm font-semibold justify-center'>
            <div
              className={`${
                isActive === 'ABOUT' ? 'text-base-mid' : 'text-white/70'
              }`}
              onClick={() => setIsActive('ABOUT')}
            >
              About
            </div>
            <div
              className={`${
                isActive === 'AUDIENCE' ? 'text-base-mid' : 'text-white/70'
              }`}
              onClick={() => setIsActive('AUDIENCE')}
            >
              Audience
            </div>
            <div
              className={`${
                isActive === 'OBJECTIVES' ? 'text-base-mid' : 'text-white/70'
              }`}
              onClick={() => setIsActive('OBJECTIVES')}
            >
              Objectives
            </div>
            <div
              className={`${
                isActive === 'SYLLABUS' ? 'text-base-mid' : 'text-white/70'
              }`}
              onClick={() => setIsActive('SYLLABUS')}
            >
              Syllabus
            </div>
            <div
              className='text-clemson'
              onClick={() => {
                gtag('event', 'workshop_register_click');
                window.open(
                  'https://learn.packagingschool.com/courses/pack-design-workshop?coupon=summer2023',
                  '_blank'
                );
              }}
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
