import React from "react";

export const GallerySection = function () {
  return (
    <section
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "95px 0" }}
    >
      <h2
        style={{
          fontSize: 32,
          textAlign: "center",
          color: "#fff",
          fontFamily: "Publica Sans",
        }}
      >
        Gallery
      </h2>
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          //   padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            display: "flex",
            columnGap: 40,
            padding: "0 40px",
            margin: "50px 0",
          }}
        >
          {[
            { title: "ALL" },
            { title: "FASHION" },
            { title: "LIFESTYLE" },
            { title: "NATURE" },
            { title: "PORTRAITS" },
            { title: "NUDES" },
            { title: "STUDIO" },
            { title: "VIDEO" },
          ].map((sec, idx) => (
            <li key={idx}>
              <p
                style={{
                  fontSize: 14,
                  //   color: "rgba(231, 221, 213, 1)",
                  color:
                    idx == 0
                      ? "rgba(231, 221, 213, 1)"
                      : "rgba(255, 255, 255, 0.6)",
                  fontFamily: "Circular Std",
                }}
              >
                {sec.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "0 15px",
          height: 560,
        }}
      >
        <img src="./images/gallery1.svg" style={{ width: "100%" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 42,
          marginBottom: 52,
        }}
      >
        <div
          style={{
            height: 8,
            width: 120,
            backgroundColor: "rgba(255, 255, 255, 0.08)",

            borderRadius: 4,
          }}
          className="flex"
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "rgba(237, 179, 136, 1)",
              borderRadius: 4,
              flex: 0.25,
            }}
          />
          <div
            style={{
              height: "100%",
              borderRadius: 4,
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.9)",
            padding: "18px 92px",
            fontSize: 16,
            borderRadius: 5,
            color: "rgba(255, 255, 255, 0.9)",
            fontFamily: "Circular Std",
          }}
        >
          More of the gallery
        </button>
      </div>
    </section>
  );
};
