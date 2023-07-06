import React from "react";

function Label({ LabelText }) {
  return (
    // <div>
    <p
      style={{
        fontSize: 16,
        fontWeight: "bold",
      }}
    >
      {LabelText}
    </p>
    // </div>
  );
}

export default Label;
