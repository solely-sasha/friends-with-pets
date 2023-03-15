import React from "react";
import Friend from "./Friend";
import data from "../data";

export default function FriendsList() {
  const friendList = data.map((friend, index) => {
    return (
      <Friend
        key={index}
        name={friend.name}
        age={friend.age}
        pets={friend.pets}
      />
    );
  });

  return <div className="friend-list">{friendList}</div>;
}
