import Link from "next/link";
import React, { useState } from "react";
import { Button } from "..";
import styles from "./Index.module.css";
import { useRouter } from "next/router";

export const Header = function ({
  title = "Miss Olamma Africa",
  subTitle = "The Biggest Pan-Igbo Beauty Pageant in the World",
}) {
  const router = useRouter();
  console.log(router);
  const [activeTab, setActiveTab] = useState(router.asPath);
  console.log(activeTab);

  return (
    <header
      className="hero-image"
      style={{
        paddingTop: 70,
        // backgroundImage:
        //   "radial-gradient(79.24% 270.81% at 35.45% 34.74%, rgba(5, 7, 5, 0.8) 0%, rgba(5, 7, 5, 0.712) 100%)",
        height: "80vh",
      }}
    >
      <div className="overlay" />
      <div
        style={{
          textAlign: "center",
          marginBottom: 103,
          position: "relative",
          zIndex: 10,
        }}
      >
        <img src="/images/logo.svg" />
      </div>
      <nav className={styles.mainNavWrapper}>
        <ul className={styles.mainNav}>
          {[
            { menu: "Home", link: "/" },
            { menu: "Road to the crown", link: "/road-to-crown" },
            { menu: "Contestants", link: "/our-contestants" },
            { menu: "Gallery", link: "/what-we-have-done" },
            { menu: "Our Story", link: "/our-story" },
            { menu: "Contact us", link: "/reach-out" },
          ].map((menu) => (
            <li>
              <Link href={`${menu.link}`}>
                <a
                  style={{
                    color: "#fff",
                    fontSize: 16,
                    fontFamily: "Circular Std",
                    color:
                      activeTab === menu.link
                        ? "rgba(188, 137, 36, 1)"
                        : "rgba(144, 144, 144, 0.9)",
                  }}
                  onClick={() => setActiveTab(menu.link)}
                >
                  {menu.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1
          style={{
            color: "rgba(255, 255, 255, 1)",
          }}
          className="main-header"
        >
          {title}
        </h1>
        <h2
          style={{
            fontFamily: "Circular Std",
            textAlign: "center",

            color: "rgba(255, 255, 255, 0.9)",
            paddingBottom: 62.5,
          }}
          className="sub-header"
        >
          {subTitle}
        </h2>
        <div className="auth-nav">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: 16,

              padding: "0 20px",
              marginBottom: 40,
            }}
          >
            <Button bg="rgba(188, 137, 36, 0.2)" style={{ flex: 1 }} />
            <Button
              bg="rgba(188, 137, 36, 1)"
              title="Register"
              style={{ flex: 1 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: 20,
              paddingBottom: 85,
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "rgba(188, 137, 36, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./images/back-arrow.svg" />
            </div>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: "rgba(188, 137, 36, 0.2)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="./images/forward-arrow.svg" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
