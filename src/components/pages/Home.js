import '../../App.css';
import './Home.css';
import React, {useRef} from 'react';
import {Canvas, useFrame, useLoader, useRender } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Home() {
    return(
        <div className='home'>
            <div className='home-container'>
                <div className='mesh-container'>
                <Canvas>
                    <OrbitControls/>
                    <directionalLight color="red" position={[0,0,5]} intensity = {0.5} />
                    <ambientLight color = "red" intensity={0.1} />
                    <spotLight position = {[10,15,10]} angle = {0.9} />
                    <mesh>
                        <boxGeometry args={[2,2,2]}/>
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
                </div>
            </div>
            hello, the home page is under construction
        </div>
    ); 
}

function FollowMouse() {
    const myMesh = React.useRef();
    return useFrame((state) =>{

    })
}

export default Home;