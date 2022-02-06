import { useEffect, useState } from "react";
import { Contestants, RolesAndPrizes } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);
  // console.log(router.query.tab);
  // console.log(activeTab);

  let content;
  if (activeTab * 1 === 0) {
    content = <Contestants />;
  } else if (activeTab * 1 === 1) {
    content = <RolesAndPrizes />;
  } else {
    content = <div />;
  }

  useEffect(() => {
    // router.push("road-to-crown?tab=" + activeTab, undefined, { shallow: true });
    setActiveTab(router.query.tab || 0);
  }, [activeTab, router]);
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
                <li key={idx} className="f20">
                  <Link href={"/road-to-crown?tab=" + idx}>
                    <a
                      onClick={() => setActiveTab(idx)}
                      style={{
                        textAlign: "center",
                        fontFamily: "Minion Pro",
                        padding: "10.5px 17px",
                        display: "block",
                        backgroundColor:
                          idx * 1 === activeTab * 1
                            ? "rgba(188, 137, 36, 0.2)"
                            : "transparent",

                        color:
                          idx === activeTab
                            ? "rgba(188, 137, 36, 1)"
                            : "rgba(108, 108, 108, 0.9)",
                        borderRadius: 5,
                        marginBottom: 30,
                      }}
                    >
                      {menu}
                    </a>
                  </Link>
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

      {content}
    </div>
  );
}
