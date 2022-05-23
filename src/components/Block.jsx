import { useRef, useState } from "react";

export default function Block(props) {
  const boxMesh = useRef();
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const boxPosition = props.position;

  return (
    <mesh
      ref={boxMesh}
      onPointerOver={() => {
        setHover(!hovered);
      }}
      onPointerOut={() => {
        setHover(!hovered);
      }}
      onPointerDown={() => {
        setActive(!active);
        console.log(active);
      }}
      scale={hovered ? 0.125 : 0.1}
      position={boxPosition}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? "hotpink" : "orange"} />
    </mesh>
  );
}
