import useStore from "./hooks/store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import BlocksContainer from "./components/BlocksContainer";
import Nav from "./components/Nav";

function App() {
  const blocks = useStore((state) => state.blocks);

  return (
    <>
      <Nav />
      <Canvas>
        <OrbitControls makeDefault />
        <ambientLight intensity={1} />
        <BlocksContainer />
      </Canvas>
    </>
  );
}

export default App;
