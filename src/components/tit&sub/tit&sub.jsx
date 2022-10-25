import React from "react";
export default function TitAndSub({ title, info }) {
  return (
    <div className="info">
      <h5>{title}</h5>
      <p>{info}</p>
    </div>
  );
}
