import React from "react";

export const Input = function ({ title, ...rest }) {
  return (
    <div style={{ marginBottom: 14.2 }}>
      <label
        style={{
          color: "rgba(255, 255, 255, 1)",
          fontSize: 14,
          marginBottom: 9,
          display: "inline-block",
          marginLeft: 10,
          width: 150,
        }}
      >
        {title}
      </label>
      <input
        type="text"
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.1)",
          width: "100%",
          padding: 12,
          borderRadius: 5,
          border: "1px solid rgba(255,255,255,0.9)",
        }}
        {...rest}
      />
    </div>
  );
};
