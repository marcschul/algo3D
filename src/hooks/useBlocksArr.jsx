import React from "react";
import Block from "../components/Block";

export function useNewBlocksArr(x) {
  const results = [];
  for (let i = 0; i < x; i++) {
    const arr = [];
    for (let j = 0; j < x; j++) {
      arr.push(
        <Block
          key={`${i}${j}`}
          position={[`${j * 0.125}`, `${i * 0.125}`, 0]}
        />
      );
    }
    results.push(arr);
  }
  return results;
}
