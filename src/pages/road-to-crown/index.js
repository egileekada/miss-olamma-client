export default function index() {
  return (
    <div>
      <header
        className="flex flex-col align-center"
        style={{
          margin: "66px 30px",
        }}
      >
        <h1
          className="f40 ct"
          style={{
            color: "rgba(14, 14, 14, 0.9)",
            marginBottom: 20,
            fontWeight: "400",
            fontFamily: "Minion Pro",
          }}
        >
          Contest of Champions (CoC)
        </h1>
        <div
          style={{
            width: 90,
            height: 4,
            backgroundColor: "rgba(188, 137, 36, 1)",
          }}
        />
        <nav style={{ marginTop: 60 }}>
          <ul>
            {["Contestants", "Rules & Prices", "Top Contestants"].map(
              (menu, idx) => (
                <li
                  key={idx}
                  style={{
                    textAlign: "center",
                    fontFamily: "Minion Pro",
                    padding: "10.5px 17px",
                    backgroundColor:
                      idx === 0 ? "rgba(188, 137, 36, 0.2)" : "transparent",
                    color:
                      idx === 0
                        ? "rgba(188, 137, 36, 1)"
                        : "rgba(108, 108, 108, 0.9)",
                    borderRadius: 5,
                    marginBottom: 30,
                  }}
                  className="f20"
                >
                  {menu}
                </li>
              )
            )}
          </ul>
        </nav>
        <div role="search" style={{ width: "100%" }}>
          <input
            placeholder="Search"
            type="search"
            className="f16"
            style={{
              padding: "12px 40px",
              backgroundColor: "rgba(252, 252, 252, 1)",
              width: "100%",
              display: "block",
              outline: "none",
              border: "rgba(252, 252, 252, 1)",
            }}
          />
        </div>
      </header>

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
    </div>
  );
}
