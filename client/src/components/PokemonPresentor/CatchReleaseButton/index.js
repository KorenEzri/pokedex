import React from "react";

export default function CatchReleaseButton({
  catchController,
  value,
  isCaught,
}) {
  return (
    <button
      onClick={(e) => {
        catchController(isCaught);
      }}
    >
      {value}
    </button>
  );
}
