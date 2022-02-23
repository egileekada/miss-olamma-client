import { useEffect, useState } from "react";
import { getData } from "../../utils";

export const Contestants = () => {
  const [contestants, setContestants] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const data = await getData("/users");
        console.log(data);
        setContestants(data.reverse());
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div
      role="Contestants"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   backgroundColor: "red",
      // }}
      style={{ backgroundColor: "rgba(5, 7, 5, 0.8)" }}
    >
      <div>
        {contestants.length === 0 ? (
          <p>There is nothing</p>
        ) : (
          <ul style={{ padding: "20px" }}>
            {contestants.map((contestant, idx) => (
              <li
                key={idx}
                style={{
                  height: 500,
                  marginBottom: 60,
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <div style={{ height: 300, overflow: "hidden" }}>
                  <img
                    src={contestant.avatar || "/images/logo.svg"}
                    alt={`image of ${contestant.firstName}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ marginTop: 17 }}>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 1)",
                      fontSize: 18,
                      fontWeight: "700",
                      marginBottom: 6,
                    }}
                  >
                    {`${contestant.lastName} ${contestant.firstName}`}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgba(188, 137, 36, 1)",
                    }}
                  >
                    {contestant.stateOfOrigin} State
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 18,
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 14,
                      color: "#fff",
                      fontWeight: "500",
                      padding: "7px 16px",
                      borderRadius: 50,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                    className="pointer"
                  >
                    Share
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      color: "rgba(188, 137, 36, 1)",
                      fontWeight: "500",
                    }}
                  >
                    {contestant.votes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
