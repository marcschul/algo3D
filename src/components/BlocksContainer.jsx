import Block from "./Block";

export default function BlocksContainer() {
  {
    /* hardcoded grid */
  }
  {
    /* [x-y-z] */
  }
  {
    /* {+/- 0.125} */
  }

  {
    /* top-left */
  }
  {
    /* <Block key="0" position={[-0.125, 0.125, 0]}/> */
  }
  {
    /* top-middle */
  }
  {
    /* <Block key="1" position={[0, 0.125, 0]}/> */
  }
  {
    /* top-right */
  }
  {
    /* <Block key="2" position={[0.125, 0.125, 0]}/> */
  }

  {
    /* middle-left */
  }
  {
    /* <Block key="3" position={[-0.125, 0, 0]}/> */
  }
  {
    /* middle */
  }
  {
    /* <Block key="4" position={[0, 0, 0]}/> */
  }
  {
    /* middle-right */
  }
  {
    /* <Block key="5" position={[0.125, 0, 0]}/> */
  }

  {
    /* bottom-left */
  }
  {
    /* <Block key="6" position={[-0.125, -0.125, 0]}/> */
  }
  {
    /* bott-middle */
  }
  {
    /* <Block key="7" position={[0, -0.125, 0]}/> */
  }
  {
    /* bottom-right */
  }
  {
    /* <Block key="8" position={[0.125, -0.125, 0]}/> */
  }

  // 3x3->9
  // 4x4->16
  // 5x5->25

  // first ** itself = total cubes

  // x, 0, 1, 2 do nothing
  // 1*0.125 = 0.125 // 3x3
  // 2*0.125 = 0.250 // 4x4
  // 3*0.125 = 0.375 // 5x5
  // 4*0.125 = 0.500 // 6x6
  // ect....
  // x === 3, 3-2 = 1
  // x === 4, 4-2 = 2
  // x === 5, 5-2 = 3

  const newBlocksArr = function (x) {
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
  };

  // x, y, z

  // const blocksArr = [
  //   [
  //     <Block key="0" position={[-0.125, 0.125, 0]} />,
  //     <Block key="1" position={[0, 0.125, 0]} />,
  //     <Block key="2" position={[0.125, 0.125, 0]} />,
  //   ],
  //   [
  //     <Block key="3" position={[-0.125, 0, 0]} />,
  //     <Block key="4" position={[0, 0, 0]} />,
  //     <Block key="5" position={[0.125, 0, 0]} />,
  //   ],
  //   [
  //     <Block key="6" position={[-0.125, -0.125, 0]} />,
  //     <Block key="7" position={[0, -0.125, 0]} />,
  //     <Block key="8" position={[0.125, -0.125, 0]} />,
  //   ],
  // ];

  return <>{newBlocksArr(9)}</>;
}
