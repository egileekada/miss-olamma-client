import { useEffect, useState } from "react";
import { getData } from "../../utils";

export const Contestants = () => {
  const [contestants, setContestants] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const data = await getData("/users");
        console.log(data);
        setContestants(data);
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
    >
      <ul style={{ padding: 20 }}>
        {contestants.map((contestant, idx) => (
          <li
            key={idx}
            style={{
              height: 400,
              marginBottom: 60,
              overflow: "hidden",
              borderRadius: 10,
            }}
          >
            <div style={{}}>
              <img
                src={contestant.avatar}
                alt={`image of ${contestant.firstName}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
