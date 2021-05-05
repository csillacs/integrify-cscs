import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <button type="button">
      <Link to="/" className="link">
        Home
      </Link>
    </button>
  );
};

export default HomeButton;
