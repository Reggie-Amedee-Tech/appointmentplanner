import React from "react";
import Tile from "../tile/Tile";

export const TileList = (props) => {
  const {tiles} = props;
  return (
    <div>
      {tiles.map((tile, idx) => (
        <Tile key={idx} tile={tile} />
      ))}
    </div>
  );
};

export default TileList;


/* <div>
      {tiles.map((tile, idx) => (
        <Tile key={idx} obj={tile} />
      ))}
    </div>

*/