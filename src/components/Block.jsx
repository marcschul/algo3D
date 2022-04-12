import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function Block(props) {

  const boxMesh = useRef();

  useFrame(({ clock }) => {
    boxMesh.current.rotation.x = clock.getElapsedTime()
  });


  return (
        <mesh ref={boxMesh}>
          <boxBufferGeometry args={[3,3,3]} />
          <meshStandardMaterial color={"#b0b"} />
        </mesh>
  ) 
}

