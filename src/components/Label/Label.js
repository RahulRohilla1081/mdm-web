import React from "react";

function Label({ LabelText }) {
  return (
    // <div>
    <p
      style={{
        fontSize: 16,
        fontWeight: "bold",
        color:"white"
      }}
    >
      {LabelText}
    </p>
    // </div>
  );
}

export default Label;
