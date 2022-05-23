import "./Nav.css";
import { useNewBlocksArr } from "../hooks/useBlocksArr";

export default function Nav(props) {
  const setBlocks = props.setBlocks;
  const blocks = props.blocks;
  return (
    <div className="Nav">
      <div>BLOCKS #: {blocks}</div>
      <div>
        <button
          class="Buttons"
          onClick={() => {
            setBlocks(blocks + 1);
          }}
        >
          +
        </button>
        <button
          class="Buttons"
          onClick={() => {
            setBlocks(blocks - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
