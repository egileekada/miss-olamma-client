import React from "react";

export const Button = function ({
  bg,
  title = "Login",
  fg = "rgba(255, 255, 255, 1)",
  style,
}) {
  return (
    <button
      style={{
        padding: "16.5px 52px",
        backgroundColor: bg,
        borderRadius: 5,
        border: "1px solid rgba(188, 137, 36, 0.2)",
        color: fg,
        ...style,
        fontFamily: "Circular Std",
      }}
    >
      {title}
    </button>
  );
};
