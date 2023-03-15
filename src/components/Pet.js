import React from "react";

export default function Pet(props) {
  return (
    <div>
      <p>Pet Name: {props.pet.name}</p>
      <p>Pet Breed: {props.pet.breed}</p>
    </div>
  );
}
