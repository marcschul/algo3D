// import useStore from "./hooks/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import BlocksContainer from "./components/BlocksContainer";
import Nav from "./components/Nav";

function App() {
  // const blocks = useStore((state) => state.blocks);
  const [blocks, setBlocks] = useState(3);

  return (
    <>
      <Nav setBlocks={setBlocks} blocks={blocks} />
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1} />
        <BlocksContainer center blocks={blocks} />
      </Canvas>
    </>
  );
}

export default App;
