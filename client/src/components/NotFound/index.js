import React from "react";
import "./notfound.css";

function NotFound() {
  return (
    <div className="404">
      <h1 className="headline">
        Sorry, we couldn`t fide what you are looking for!
      </h1>
      <a className="link" href="localhost:3000">
        To Home Page
      </a>
    </div>
  );
}

export default NotFound;
