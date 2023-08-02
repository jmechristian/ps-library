import { Suspense, useRef, useEffect } from 'react';
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

export function Model(props) {
  const group = useRef();
  const model = useGLTF('/box.glb');
  // console.log(materials);
  // useFrame((state) => {
  //   const t = state.clock.getElapsedTime();
  //   group.current.rotation.x = -Math.PI / 0.25 + Math.cos(t / 4) / 8;
  //   group.current.rotation.y = Math.sin(t / 6) / 8;
  //   group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
  //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // });
  // useFrame(({ mouse, viewport }) => {
  //   const x = (mouse.x * viewport.width) / 2.5;
  //   const y = (mouse.y * viewport.height) / 2.5;
  //   ref.current.lookAt(x, y, 1);
  // });
  return (
    <primitive
      object={model.scene}
      scale={1.25}
      position={[0, -1, 0]}
      rotation={[0.05, -2, 0]}
    />
    //   <group ref={group} {...props} dispose={null}>
    //     <group name='Scene' position={[0, -1, 0.5]}>
    //       <group name='Empty' position={[0, 1.37, 0]}>
    //         <group name='back_1' position={[0, -1.37, 0]}>
    //           <primitive object={nodes.back} />
    //           <primitive object={nodes.front} />
    //           <primitive object={nodes.left} />
    //           <primitive object={nodes.right} />
    //           <primitive object={nodes.neutral_bone} />
    //           <skinnedMesh
    //             name='Cube'
    //             geometry={nodes.Cube.geometry}
    //             material={materials.Brown}
    //             skeleton={nodes.Cube.skeleton}
    //           />
    //         </group>
    //       </group>
    //     </group>
    //   </group>
  );
}

useGLTF.preload('/box.glb');

const SpaCanvas = () => {
  return (
    <div className='pt-24 w-full hidden lg:block relative'>
      <Canvas shadows linear='true' flat='true' position={[1, 0, 0]}>
        {/* <color attach='background' args={['#fefefe']} /> */}
        <ambientLight intensity={1.5} />
        <Suspense fallback='none'>
          <Float>
            <Model />
          </Float>
        </Suspense>
        <ContactShadows
          position={[0, 1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Environment preset='city' />
      </Canvas>
    </div>
  );
};

export default SpaCanvas;
