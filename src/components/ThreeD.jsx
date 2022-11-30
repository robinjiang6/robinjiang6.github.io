import "./ThreeD.css";
import { Canvas } from "@react-three/fiber";
import { useLoader} from "@react-three/fiber"; //, useThree } from "@react-three/fiber";
import {OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./models/rmpg_centered.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={30} />
    </>
  );
};
/*
const UpdateState = () => {
  const state = useThree()
  state.camera.maxPolarAngle:3;
}*/

export default function ThreeD() {
  return(
    <div className="canvas-container">
      <Canvas className='canvas'>
        <Suspense fallback={null}>
          {/*<UpdateState />*/}
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 0, 5]} />
          <Model />
          <OrbitControls autoRotate autoRotateSpeed={0} enableZoom={true} enablePan={false} minPolarAngle={1} maxPolarAngle={2} minDistance={5} maxDistance={15}/>
        </Suspense>
      </Canvas>
    </div>
  );
}