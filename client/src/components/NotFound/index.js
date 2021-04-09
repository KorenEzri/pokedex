import React from "react";
import "./notfound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="404">
      <h1 className="headline">
        Sorry, we couldn`t fide what you are looking for!
      </h1>
      <Link className="link" to="/">
        To Home Page
      </Link>
    </div>
  );
}

export default NotFound;
