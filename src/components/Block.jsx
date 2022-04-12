import React from 'react';

export default function Block(props) {

  return (
        <mesh>
          <boxBufferGeometry args={[3,3,3]} />
          <meshStandardMaterial color={'orange'} />
        </mesh>
  ) 
}

