import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function Block(props) {

  const boxMesh = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const boxPosition = props.position;

  console.log('boxPosition',boxPosition)
  useFrame(({ clock }) => {
    // console.log(clock.getElapsedTime());
    // boxMesh.current.rotation.x = clock.getElapsedTime();
    // boxMesh.current.rotation.y = clock.getElapsedTime();
    // boxMesh.current.rotation.z = clock.getElapsedTime();
  });


  return (
        <mesh 
          ref={boxMesh}
          onPointerOver={() => {setHover(!hovered)}}
          onPointerOut={() => {setHover(!hovered)}}
          onPointerDown={() => {
            setActive(!active);
            console.log(active)
          }}
          scale={hovered ? 0.125 : 0.1}
          position={boxPosition}
          >  
            <boxBufferGeometry 
              args={[1,1,1]} 
            />
            <meshStandardMaterial 
              color={active ? "hotpink" : "orange"} 
            />
        </mesh>
  ) 
}

