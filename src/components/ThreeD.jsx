import "./ThreeD.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


const Model = () => {
  const windowWidth = Math.min(window.innerWidth, 900);
  const gltf = useLoader(GLTFLoader, "./models/rmpg_centered.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={30 * windowWidth/900} />
    </>
  );
};

export default function ThreeD() {
  window.addEventListener('resize', Model)
  return(
    <div className="canvas-container">
      <Canvas className='canvas'>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <Model />
          <OrbitControls autoRotate autoRotateSpeed={0} enableZoom={true} enablePan={false} minPolarAngle={1} maxPolarAngle={2} minDistance={5} maxDistance={15}/>
        </Suspense>
      </Canvas>
    </div>
  );
}