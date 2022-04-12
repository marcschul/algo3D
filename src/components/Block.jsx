import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default function Block(props) {

  const boxMesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(({ clock }) => {
    boxMesh.current.rotation.x = clock.getElapsedTime()
  });


  return (
        <mesh 
          ref={boxMesh}
          onPointerDown={() => {
            setActive(!active);
            console.log(active)
          }}
          scale={active ? 1.5 : 1}
          >  
            <boxBufferGeometry args={[1,1,1]} />
            <meshStandardMaterial color={active ? "hotpink" : "orange"} />
        </mesh>
  ) 
}

