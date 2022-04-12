export default function Block(props) {

  return (
        <mesh>
          <boxBufferGeometry args={[3,3,3]} />
          <meshStandardMaterial color={"#b0b"} />
        </mesh>
  ) 
}

