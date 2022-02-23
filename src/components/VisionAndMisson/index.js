import React from "react";

export const VisionAndMission = function () {
  return (
    <div
      style={{
        padding: "0 30px",
        backgroundColor: "rgba(5, 7, 5, 0.8)",
        paddingTop: 60,
      }}
    >
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "Circular Std",
            marginBottom: 17.3,
          }}
        >
          Our vision
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 16,
          }}
        >
          We are determined to create a pan African platform that celebrates the
          African beauty through the eyes of the Igbo Woman.
        </p>
      </div>
      <div style={{ marginTop: 30 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "Circular Std",
            marginBottom: 17.3,
          }}
        >
          Our mission
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 16,
          }}
        >
          To design an annual contest that allows Igbo African Women to express
          themselves through pageantry.
        </p>
      </div>
    </div>
  );
};
