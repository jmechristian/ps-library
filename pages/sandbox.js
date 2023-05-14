import React, { useRef } from 'react';
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
import SpaContainer from '../components/SPA/SpaContainer';

export function Model(props) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/box.glb');
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = -Math.sin(t / 4) / 24;
    ref.current.rotation.z = (1 + Math.sin(t / 1.5)) / 40;
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 80;
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
        position={[5, 5, -10]}
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
    easing.damp3(state.camera.position, [-0.4, -0.03, 2], 0.25, delta);
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });
  return <group ref={group}>{children}</group>;
}

const Page = () => {
  return (
    <div className='w-full bg-base-brand flex flex-1 full-height relative'>
      <SpaContainer />
      <div className='absolute top-0 left-0 w-full h-full'>
        <Canvas camera={{ position: [0, 0, 0], fov: 25 }} shadows dpr='2'>
          <ambientLight intensity={0.5} />
          <Environment preset='city' />
          <CameraRig>
            <Backdrop />
            <Center>
              <Model />
            </Center>
          </CameraRig>
        </Canvas>
      </div>
    </div>
  );
};

useGLTF.preload('/box.glb');

export default Page;
