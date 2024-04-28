import React from "react";
import { Link } from "react-router-dom";

function PageAdd() {
  return (
    <Link to={`guestBookWrite`} className="add_btn">
      <span className="add material-symbols-rounded"> add </span>
    </Link>
  );
}

export default PageAdd;
