import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  CompanySection,
  ComplainsSection,
  GallerySection,
} from "../components";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className="hero-image"
        style={{
          paddingTop: 70,
          backgroundImage:
            "radial-gradient(79.24% 270.81% at 35.45% 34.74%, rgba(5, 7, 5, 0.8) 0%, rgba(5, 7, 5, 0.712) 100%)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 103 }}>
          <img src="/images/logo.svg" />
        </div>
        <h1
          style={{
            fontSize: 32,
            fontWeight: "900",
            fontFamily: "Circular Std",
            textAlign: "center",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Miss Olamma Africa
        </h1>
        <h2
          style={{
            fontSize: 14,
            fontFamily: "Circular Std",
            textAlign: "center",
            marginTop: 16,
            color: "rgba(255, 255, 255, 0.9)",
            paddingBottom: 62.5,
          }}
        >
          The Biggest Pan-Igbo Beauty Pageant in the World
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            columnGap: 16,
            paddingBottom: 40,
          }}
        >
          <Button bg="rgba(188, 137, 36, 0.2)" />
          <Button bg="rgba(188, 137, 36, 1)" />
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
      </header>

      <main>
        <CompanySection />
        <GallerySection />
        <ComplainsSection />
      </main>

      <footer style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingTop: 61 }}>
        <section role="links" className="flex justify-center">
          <ul className="flex" style={{ columnGap: 16 }}>
            {[
              { img: "facebook.svg" },
              { img: "instagram.svg" },
              { img: "twitter.svg" },
              { img: "youtube.svg" },
            ].map((link) => (
              <li>
                <a href="">
                  <img src={"./images/" + link.img} />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <ul
          className="flex align-center flex-col"
          style={{ marginTop: 50, marginBottom: 42 }}
        >
          {[
            {
              menu: "Terms of use",
            },
            { menu: "Privacy poilicy" },
            { menu: "How voting works" },
          ].map((menu) => (
            <li>
              <Link href="/">
                <a
                  style={{
                    color: "rgba(188, 137, 36, 1)",
                    fontSize: 14,
                    fontFamily: "Circular Std",
                    padding: 10,
                    display: "inline-block",
                  }}
                >
                  {menu.menu}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <p
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: 12,
              lineHeight: 1.6,
              textAlign: "center",
              padding: "0 50px 38px 50px",
            }}
          >
            Copyright 2022 Miss Olamma africa beauty Pageant. All rights
            reserved.
          </p>
        </div>
      </footer>
      {/* <div style={{ height: 300 }}></div> */}
    </div>
  );
}
