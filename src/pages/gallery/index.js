import { useEffect, useState } from "react";
import { Contestants, PageHeader, TopContestants } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);
  // console.log(router.query.tab);
  // console.log(activeTab);

  let content;
  if (activeTab === "photos") {
    content = <Contestants />;
  } else {
    content = <TopContestants />;
  }

  useEffect(() => {
    // router.push("road-to-crown?tab=" + activeTab, undefined, { shallow: true });

    setActiveTab(router.query.tab || "photos");
  }, [activeTab, router]);
  return (
    <div>
      <header
        className="flex flex-col align-center"
        style={{
          margin: "66px 30px",
        }}
      >
        <PageHeader title="Gallery" />
        <nav style={{ marginTop: 60 }}>
          <ul className="flex-wrap">
            {["Photos", "Videos"].map((menu, idx) => (
              <li key={idx} className="f20">
                <Link href={"/gallery?tab=" + menu.toLowerCase()}>
                  <a
                    onClick={() => setActiveTab(idx)}
                    style={{
                      textAlign: "center",
                      fontFamily: "Minion Pro",
                      padding: "7.5px 25px",
                      display: "block",
                      backgroundColor:
                        menu.toLowerCase() === activeTab
                          ? "rgba(188, 137, 36, 0.2)"
                          : "transparent",

                      color:
                        menu.toLowerCase() === activeTab
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
            ))}
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
