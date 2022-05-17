import React from "react";

export const Tile = (props) => {
  const {contacts} = props;
  return (
    <div className="tile-container">
      {contacts.map((item, idx) => {
          return <div key={idx}>
            <p className="tile-title">{item.currentName}</p>
            <p className="tile">{item.phone}</p>
            <p>{item.email}</p>
            </div>
        })}
    </div>
  );
};

export default Tile;
