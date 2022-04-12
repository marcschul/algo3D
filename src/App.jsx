import React from 'react';
import './App.css';
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
        <Block />
      </Canvas>
    </>
  );
}

export default App;
