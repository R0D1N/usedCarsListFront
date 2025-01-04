import React from "react";

function Price({ price }) {
  const dollarValue = 41.2; // TODO: get dollar value from API

  return (
    <div className="mb-1 hstack gap-2">
      <span className="h4 text-success">{price} $</span>
      <span className="text-muted">•</span>
      <span className="fs-6">{(price * dollarValue).toFixed(0)} грн</span>
    </div>
  );
}

export default Price;
