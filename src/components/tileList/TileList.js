import React from "react";
import Tile from "../tile/Tile";

export const TileList = (props) => {
  const {contacts} = props;
  return (
    <div>
      <Tile contacts={contacts}/>
    </div>
  );
};

export default TileList;

