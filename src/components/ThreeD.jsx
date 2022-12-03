import "./ThreeD.css";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader} from "@react-three/fiber"; //, useThree } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./models/rmpg_upright.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={300} />
    </>
  );
};

function UpdateModelSize() {
  let width = window.innerWidth;
  const cam = useThree().camera;
  cam.zoom = 10 * width/1980;
}


export default function ThreeD() {
  let width = window.innerWidth;
  window.addEventListener('resize', () => {
    UpdateModelSize()
  });
  return(
    <div className="canvas-container">
      <Canvas className='canvas'>
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault zoom={10 * width/1980} near={-200}/>
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 100, 20]} />
          <PresentationControls 
            enabled={true} // the controls can be disabled by setting this to false
            global={true} // Spin globally or by dragging the model
            cursor={false} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={2} // Speed factor
            zoom={0.8} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[-Math.PI / 6, Math.PI / 6]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
          >
            <Model />
          </PresentationControls>
          <OrbitControls autoRotate autoRotateSpeed={1}/>
        </Suspense>
      </Canvas>
    </div>
  );
}