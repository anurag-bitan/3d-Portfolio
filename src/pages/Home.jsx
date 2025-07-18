import React from 'react';
import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import  Island  from '../models/Island'; // Assuming you have an Island model
import Bird from '../models/Bird';
import Sky from '../models/Sky'; 
import Plane from '../models/Plane'; 
import HomeInfo from '../components/HomeInfo';
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume=0.04;
  audioRef.current.loop =true;
  const [isRotating, setIsRotating] = useState(false);
  const[currentStage, setCurrentStage] = useState(1);
  const[isPlayingMusic,setIsPlayingMusic] = useState(false);
  
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);
  
  const adjustIslandForScreenSize =() => {
    let screenScale , screenPosition ;
    let rotation = [0.1, 4.7, 0];

    //console.log("window.innerWidth", window.innerWidth);
     if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }



    return [screenScale, screenPosition,rotation];
  }
  
    const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustBiplaneForScreenSize();

  return (
    <section className="w-full h-screen bg-transparent">
       <div className="absolute left-0 right-0 z-10 flex items-center justify-center top-28">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> 
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursur-grabbing' : 'cursur-grab'}`}
        camera={{ near: 0.1, far: 1000, position: [0, 0, 5] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={2}/>
          <hemisphereLight skyColor={"#b1e1ff"} groundColor={"#000000"} intensity={1}/>
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            //position={[0, 0, 0]} 
            //scale={[1, 1, 1]} 
            //rotation={[0, 0, 0]} 
            position={islandPosition}
             scale={islandScale}
             rotation={islandRotation}
             isRotating={isRotating}
             setIsRotating={setIsRotating}
             setCurrentStage={setCurrentStage}
          />
          <Plane 
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='object-contain w-10 h-10 cursor-pointer'
        />
      </div>
    </section>
  )
}

export default Home
