import { useNewBlocksArr } from "../hooks/useBlocksArr";

export default function BlocksContainer(props) {
  const blocks = props.blocks;
  return <>{useNewBlocksArr(blocks)}</>;
}
