import React from 'react';
import './App.css';
import useStore from './hooks/store';

import Block from './components/Block';
import Nav from './components/Nav';
import { Canvas } from "@react-three/fiber";

function App() {

  const blocks = useStore(state => state.blocks);

  return (
    <div className="App">
      <Nav />

      <div className="Canvas">
        <Canvas>
          <Block />
        </Canvas>
      </div>

    </div>
  );
}

export default App;
