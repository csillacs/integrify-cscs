import React from "react";
import { Link } from "react-router-dom";

const MoreButton = ({ name, id }) => {
  return (
    <button type="button" key={name}>
      <Link to={`/users/${id}`} className="link">
        More details
      </Link>
    </button>
  );
};

export default MoreButton;
