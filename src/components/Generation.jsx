import React from "react";

// TODO: get dollar value from API

function Generation({ generation }) {
  const generationText = generation.join(" • ");
  return (
    <div className="mb-1">
      <span className="fs-6">{generationText}</span>
    </div>
  );
}

export default Generation;
