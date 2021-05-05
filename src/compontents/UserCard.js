import React from "react";
import Avatar from "react-avatar";

import MoreButton from "./MoreButton";

const UserCard = ({ name, username, website, id }) => {
  return (
    <div className="list">
      <div className="card">
        <Avatar name={name} round={true} color="lightgray" />
        <h4>
          <b>{name}</b>
        </h4>
        <div className="container">
          <p className="username">@{username}</p>
          <p>
            <a
              href={`http://${website}`}
              target="_blank"
              rel="noreferrer"
              className="website"
            >
              http://{website}
            </a>
          </p>
          <MoreButton name={name} id={id} />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
