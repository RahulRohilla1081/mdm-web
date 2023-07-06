import React from "react";

function IconButton({ Icon, ContainerStyle, Style, onClick }) {
  return (
    <div style={ContainerStyle}>
      <img src={Icon} style={Style} onClick={onClick} />
    </div>
  );
}

export default IconButton;
