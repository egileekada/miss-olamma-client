

export const Contestants=()=>{
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
            {[1, 2, 3, 4].map((contestant, idx) => (
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
                    src="/images/contestant.svg"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
}
  
