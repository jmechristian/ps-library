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
} from '@react-three/drei';

export function Model(props) {
  const group = useRef();
  const model = useGLTF('/box.glb');
  // console.log(materials);
  // // useFrame((state) => {
  // //   const t = state.clock.getElapsedTime();
  // //   group.current.rotation.x = -Math.PI / 0.25 + Math.cos(t / 4) / 8;
  // //   group.current.rotation.y = Math.sin(t / 6) / 8;
  // //   group.current.rotation.z = (1 + Math.sin(t / 1.5)) / 20;
  // //   group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  // // });
  return (
    <primitive
      object={model.scene}
      scale={0.8}
      position={[0, -0.5, 0]}
      rotation={[0, 0.9, 0]}
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
    <div className='pt-16 w-full hidden lg:block'>
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Float>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Center>
              <Model scale={0.6} rotation={[0, 0.8, 0]} />
            </Center>
          </PresentationControls>
        </Float>
        <ContactShadows
          position={[0, -1.2, 0]}
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
