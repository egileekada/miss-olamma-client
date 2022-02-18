import React from "react";

export const ContestAndContestant = function () {
  return (
    <section
      style={{
        padding: "53px 30px",
        backgroundColor: "rgba(5, 7, 5, 0.8)",
      }}
    >
      <div style={{ marginBottom: 50 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 20,
            fontWeight: "700",
            fontFamily: "Circular Std",
            marginBottom: 10,
          }}
        >
          The Contest
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 14,
          }}
        >
          Miss Olamma Africa Pageant is an online voting contest that culminates
          into a grand finale amidst a high-quality audience, the media, and
          stakeholders across Nigeria. Each contestant registers with her
          picture and generates a unique personal link to her page. She gets
          voted for through the link. The contest is in two stages.. .
        </p>
      </div>
      <div style={{ marginBottom: 105 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 20,
            fontWeight: "700",
            fontFamily: "Circular Std",
            marginBottom: 10,
          }}
        >
          Contestant
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 14,
          }}
        >
          Contestants are Igbo ladies between 18-30 years of age. Contestants
          can either live within Nigeria or any part of the world. Any
          contestant living outside Nigeria must ensure physical presence at the
          grand finale as no representative will be permitted.
        </p>
      </div>
    </section>
  );
};
