import useStore from './hooks/store';

import Block from './components/Block';
import Nav from './components/Nav';
import { Canvas } from "@react-three/fiber";

function App() {

  const blocks = useStore(state => state.blocks);

  return (
    <>
      <Nav />
      <Canvas>
        <ambientLight intensity={1} />
        <Block />
      </Canvas>
    </>
  );
}

export default App;
