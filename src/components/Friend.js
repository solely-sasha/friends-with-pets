import React from "react";
import Pet from "./Pet";

export default function Friend(props) {
  const petList = props.pets.map((pet, index) => {
    return <Pet key={index} pet={pet} />;
  });

  return (
    <div className="friend">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <h3>Pets:</h3>
      {petList}
    </div>
  );
}
