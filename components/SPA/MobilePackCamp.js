import React, { useState, useRef, useEffect } from 'react';
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
import SpaNav from '../SPA/SpaNav';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Center,
  OrbitControls,
  Environment,
  AccumulativeShadows,
  RandomizedLight,
} from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { easing } from 'maath';
import { motion, useScroll } from 'framer-motion';

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/box.glb');
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = -Math.sin(t / 4) / 24;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 100;
    // ref.current.position.y = (1 + Math.sin(t / 1.5)) / 80;
  });
  return (
    <group
      {...props}
      ref={ref}
      dispose={null}
      scale={0.15}
      rotation={[0, 0, 0]}
      position={[0, 0, 0.2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Material.001']}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Material}
        position={[-0.17, 1.76, 0]}
        scale={[0.92, 0.33, 0.33]}
      />
    </group>
  );
}

function Backdrop() {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[-2, 2, -5]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

function CameraRig({ children }) {
  const group = useRef();
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, -0.25, 2], 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

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

const MobilePackCamp = () => {
  const { scrollYProgress } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    console.log(scrollYProgress.current);
    scrollYProgress.onChange((latest) => {
      if (scrollYProgress.current > 0.02) {
        setIsScrolling(true);
      }

      if (scrollYProgress.current < 0.02) {
        setIsScrolling(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <div className='w-full h-full bg-indigo-200 relative flex flex-col gap-6 pb-20'>
      <div className='flex flex-col lg:flex-row-reverse items-center justify-center'>
        {/* CAMERA */}
        <div className='aspect-square md:aspect-[4/3] w-full h-full relative'>
          <div className='w-full h-full fixed top-0 left-0'>
            <Canvas camera={{ position: [0, 0, 0], fov: 40 }} shadows dpr='2'>
              <ambientLight intensity={0.6} />
              {/* <Environment preset='city' /> */}
              <CameraRig>
                <Backdrop />
                <Center>
                  <Model />
                </Center>
              </CameraRig>
            </Canvas>
          </div>
        </div>
        {/* CONTENT */}
        <motion.div
          className='w-full h-full py-12 relative z-50 bg-transparent rounded-xl'
          animate={isScrolling ? { backgroundColor: '#1f97bf' } : {}}
        >
          <div className='flex flex-col gap-6 mb-9 md:max-w-2xl md:mx-auto'>
            <div className='max-w-xl flex flex-col gap-5 xl:gap-6 h-full p-6 rounded-xl'>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-wrap gap-x-6 gap-y-3'>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <BoltIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-gray-900 text-sm'>
                      Newly Released!
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <ComputerDesktopIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-gray-900 text-sm'>
                      Online
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <HandRaisedIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-gray-900 text-sm'>
                      Hands-On
                    </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <div>
                      <CodeBracketIcon className='w-5 h-5 stroke-white' />
                    </div>
                    <div className='font-medium text-gray-900 text-sm'>
                      Software Provided
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-5xl text-gray-800 tracking-tight font-greycliff font-semibold leading-none'>
                    Pack Design Workshop
                  </div>

                  <div className='text-2xl font-semibold text-white'>
                    <span className='font-bold'>$399</span>
                  </div>
                </div>
                <div className='text-lg text-gray-900'>
                  Students completing the workshop will design and improve a
                  paperboard carton or corrugated container and learn how to
                  price and order production samples of their packaging.
                </div>
              </div>
              <div
                className='font-greycliff mt-2 flex items-center gap-1 text-lg cursor-pointer font-semibold text-white bg-clemson shadow w-fit py-3 px-4 rounded-lg text-center lg:text-left'
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
            </div>
          </div>
          <SpaNav />
          <div className='md:max-w-2xl md:mx-auto'>
            <SpaAbout />
            <SpaAudience />
            <SpaObjectives objectives={objectives} />
            <SpaSyllabus syllabus={syllabus} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MobilePackCamp;
