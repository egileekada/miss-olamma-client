import { useEffect, useState } from "react";
import { Contestants, PageHeader, TopContestants } from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import { NewsList } from "../../components/NewsList";

export default function RoadToCrown() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tab || 0);

  return (
    <div>
      <header
        className="flex flex-col align-center"
        style={{
          margin: "66px 30px",
        }}
      >
        <PageHeader title="News" />

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
              marginTop: 60,
              boxShadow: "0px 4px 30px rgba(196, 196, 196, 0.2)",
            }}
          />
        </div>
      </header>

      <NewsList />
    </div>
  );
}
