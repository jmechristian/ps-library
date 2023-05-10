import { Suspense, useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {
  Environment,
  PresentationControls,
  OrbitControls,
  useGLTF,
  ContactShadows,
  Center,
  Float,
  useAnimations,
  Plane,
} from '@react-three/drei';
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

export function Model(props) {
  const group = useRef();
  const model = useGLTF('/boz_unfold.glb');
  console.log('model', model);

  return <primitive object={model.scene} scale={1} />;
}

useGLTF.preload('/boz_unfold.glb');

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
    <div className='full-height'>
      <div className='w-full full-height relative'>
        <div
          className='absolute top-0 left-0 right-0 bottom-0 z-1 bg-cover'
          style={{ backgroundImage: `url('/preview.png')` }}
        >
          {/* <Canvas
            shadows
            camera={{
              position: [0, 0, 0],
            }}
          >
            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.25} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <Environment preset='city' />
          </Canvas> */}
        </div>
        <div className='absolute top-0 left-0 right-0 bottom-0'>
          <div className='w-full max-w-7xl mx-auto py-20'>
            <div className='flex gap-6'>
              <div className='flex flex-col gap-6 mt-2 max-w-lg'>
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
                  <div className='w-16 h-16 bg-clemson backdrop-blur rounded-full flex justify-center items-center shadow-lg'>
                    <TrophyIcon className='w-8 h-8 fill-white' />
                  </div>
                  <div className='font-bold text-white font-greycliff'>
                    Register
                  </div>
                </div>
              </div>
              <div
                className='max-w-2xl flex flex-col gap-10 bg-white/30 min-h-[600px] max-h-[780px] overflow-scroll p-9 rounded-lg backdrop-blur-lg shadow-lg'
                id='scrollers'
              >
                <div className='flex flex-col gap-4'>
                  <div className='font-greycliff flex items-center gap-1 text-medium font-semibold text-white bg-clemson shadow w-fit py-2 px-4 rounded-lg'>
                    <div>
                      <BoltIcon className='w-4 h-4 fill-white' />
                    </div>
                    <div>Save 10% Pre-Register By June 1</div>
                  </div>

                  <div className='text-5xl text-slate-800 font-greycliff font-semibold'>
                    Box Packaging Workshop
                  </div>
                  <div className='text-base font-semibold text-white'>
                    $1200 | XX Hours | XX Lessons | Online
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
      </div>
    </div>
  );
};

export default Page;
