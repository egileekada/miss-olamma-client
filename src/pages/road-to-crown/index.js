import { useEffect, useState } from "react";
import {
  CompanySection,
  ContestAndContestant,
  Contestants,
  Footer,
  PageHeader,
  RolesAndPrizes,
  TopContestants,
} from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import io from "socket.io-client";
import { Header } from "../../components";

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
    content = <TopContestants />;
  }

  useEffect(() => {
    // router.push("road-to-crown?tab=" + activeTab, undefined, { shallow: true });
    const socket = io("https://custom-echat.herokuapp.com");
    console.log(socket);
    socket.on("users", (data) => {
      console.log(data);
      socket.emit("con", "i'm connected");
    });
    setActiveTab(router.query.tab || 0);
  }, [activeTab, router]);
  return (
    <div>
      <Header title="Road to the crown" subTitle="Rules & Prizes" />

      <ContestAndContestant />
      <RolesAndPrizes />
      <Footer />
    </div>
  );
}
