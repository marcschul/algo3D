import useStore from './hooks/store';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

import Block from './components/Block';
import Nav from './components/Nav';

function App() {

  const blocks = useStore(state => state.blocks);

  return (
    <>
      <Nav />
      <Canvas>
        < OrbitControls />
        <ambientLight intensity={1} />
        {/* hardcoded grid */}

        {/* top-left */}
        <Block position={[-0.125, 0.125, 0]}/>
        {/* top-middle */}
        <Block position={[0, 0.125, 0]}/>
        {/* top-right */}
        <Block position={[0.125, 0.125, 0]}/>
        <Block position={[-0.125, -0.125, 0]}/>
        <Block position={[0.125, 0, 0]}/>
        <Block position={[-0.125, 0, 0]}/>
        <Block position={[0, -0.125, 0]}/>
        <Block position={[0.125, -0.125, 0]}/>
        <Block position={[0, 0, 0]}/>
      </Canvas>
    </>
  );
}

export default App;
