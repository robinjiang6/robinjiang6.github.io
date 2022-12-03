import "./ThreeD.css";
import { Canvas, useFrame} from "@react-three/fiber";
import { useLoader} from "@react-three/fiber";
import { OrbitControls, OrthographicCamera} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./models/rmpg_upright.gltf");
  const ref = useRef();
  const maxWidth = 800;
  let width = Math.max(window.innerWidth, maxWidth);
  const updateWidth = () => {
    width = Math.max(window.innerWidth, maxWidth);
  }
  useFrame((state, delta) => {
    ref.current.scale.x = 300 * width/1980;
    ref.current.scale.y = 300 * width/1980;
    ref.current.scale.z = 300 * width/1980;
  });
  window.addEventListener("resize", updateWidth);
  return (
    <>
      <primitive object={gltf.scene} scale={300} ref={ref}/>
    </>
  );
};

const TheCamera = () => {
  const ref = useRef();
  return(
    <OrthographicCamera makeDefault zoom={10} near={-200} ref={ref}/>
  )
}

export default function ThreeD() {
  return(
    <div className="canvas-container">
      <Canvas className='canvas'>
        <Suspense fallback={null}>
          <TheCamera />
          <ambientLight intensity={0.2} />
          <directionalLight color="white" position={[0, 100, 20]} />
          {/*<PresentationControls 
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
  </PresentationControls>*/}
          <Model />
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={true} enablePan={false} minPolarAngle={1} maxPolarAngle={2} minDistance={5} maxDistance={15} minZoom={5} maxZoom={15}/>
        </Suspense>
      </Canvas>
    </div>
  );
}