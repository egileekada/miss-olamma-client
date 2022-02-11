import { useEffect, useState } from "react";
import {
  Contestants,
  PageHeader,
  RolesAndPrizes,
  TopContestants,
} from "../../components";
import { useRouter } from "next/router";
import Link from "next/link";
import { COLORS } from "../../configs/constants";

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
        <PageHeader title="Our Story" />
      </header>
      <main>
        <div style={{ padding: "0 62px" }}>
          <div>
            <h2
              style={{
                color: "rgba(14, 14, 14, 0.9)",
                fontWeight: "700",
                fontFamily: "Typo Grotesk Black",
                marginBottom: 15,
              }}
              className="f24"
            >
              Our vision
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(108, 108, 108, 0.9)",
                marginBottom: 20,
              }}
            >
              We are determined to create a pan African platform that celebrates
              the African beauty through the eyes of the Igbo Woman.
            </p>
            <button
              style={{
                padding: "14.5px 40px",
                backgroundColor: COLORS.primary1,
                border: `1px solid ${COLORS.primary1}`,
                color: "rgba(255, 255, 255, 1)",
              }}
            >
              Join Contest
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              columnGap: 44,
              alignItems: "center",
              marginTop: 60,
            }}
          >
            <div>
              <img
                src="/images/cont1.svg"
                style={{ width: "100%", borderRadius: 10 }}
              />
            </div>
            <div>
              <div style={{ marginBottom: 44 }}>
                <img
                  src="/images/cont2.svg"
                  style={{ width: "100%", borderRadius: 10 }}
                />
              </div>
              <div>
                <img
                  src="/images/cont3.svg"
                  style={{ width: "100%", borderRadius: 10 }}
                />
              </div>
            </div>
          </div>
          <div>
            <h2
              style={{
                color: "rgba(14, 14, 14, 0.9)",
                fontWeight: "700",
                fontFamily: "Typo Grotesk Black",
                marginBottom: 15,
                marginTop: 70,
              }}
              className="f24"
            >
              Our mission
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(108, 108, 108, 0.9)",
                marginBottom: 20,
              }}
            >
              To design an annual contest that allows Igbo African Women to
              express themselves through pageantry.
            </p>
          </div>
          <div>
            <h2
              style={{
                color: "rgba(14, 14, 14, 0.9)",
                fontWeight: "700",
                fontFamily: "Typo Grotesk Black",
                marginBottom: 15,
                marginTop: 30,
              }}
              className="f20"
            >
              Strategy
            </h2>
            <ul>
              {[
                "Global Positioning",
                "Pan-Igbo",
                "Cultural Integration",
                "Tourism of Igbo Land",
                "Technology driven",
                "Innovation",
                "Igbo Market Segmentation and Penetration",
                "Women Empowerment",
              ].map((item) => (
                <li style={{ color: "rgba(108, 108, 108, 0.91)" }}>{item}</li>
              ))}

              <li style={{ color: "rgba(108, 108, 108, 0.91)" }}>
                Deployment of technology
              </li>
              <li style={{ color: "rgba(108, 108, 108, 0.91)" }}>
                Innovation Women empowerment
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", marginTop: 50 }}>
            <div style={{}}>
              <img
                src="/images/overlay1.svg"
                style={{ width: "120%", borderRadius: 10 }}
              />
            </div>
            <div
              style={{
                position: "relative",
                top: 100,
                left: -30,
              }}
            >
              <img
                src="/images/overlay2.svg"
                style={{ width: "120%", borderRadius: 10 }}
              />
            </div>
          </div>
          <ul style={{ marginTop: 140 }}>
            <li style={{ marginBottom: 30 }}>
              <h2
                style={{ textAlign: "center", marginBottom: 16 }}
                className="f24"
              >
                The Contest
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                Miss Olamma Africa Pageant Season 2 has been themed IFENKILI
                (Something to Behold). Each of the 5 Eastern states will hold
                their eliminations and produce 3 winners who will represent
                their state in what will become an epic Contest of Champions
                (CoC).
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                The CoC will have a total of 15 champions who will battle for
                the most coveted crown in all of the Igbo Universe. The queen
                will be a very loud and significant voice in leadership, policy,
                culture, tourism, and economy of Ndi Igbo all over the world.
              </p>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                Miss Olamma Africa Contest of Champions will be streamed live to
                millions across the world, aired on multiple television
                platforms local and internationally on both cable and
                terrestrial broadcasting, and will attract diverse international
                interests.
              </p>
            </li>
            <li style={{ marginBottom: 30 }}>
              <h2
                style={{ textAlign: "center", marginBottom: 16 }}
                className="f24"
              >
                Registration
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                Interested contestants are welcomed from any part of the world
                they are resident, so long as they are Igbo women from any of
                the five Igbo states which are Abia, Anambra, Ebonyi, Enugu, and
                Imo.
              </p>
            </li>
            <li style={{ marginBottom: 30 }}>
              <h2
                style={{ textAlign: "center", marginBottom: 16 }}
                className="f24"
              >
                Criteria
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                1. Eligible contestants must be from the five core Igbo states.
                2. Must be between 18years to 28years of age at the time of
                registration. 3. Must not be less than 5.8ft in height
              </p>
            </li>
            <li style={{ marginBottom: 30 }}>
              <h2
                style={{ textAlign: "center", marginBottom: 16 }}
                className="f24"
              >
                State Contest
              </h2>
              <p
                style={{
                  textAlign: "center",
                  color: "rgba(108, 108, 108, 1)",
                  lineHeight: 1.3,
                  fontFamily: "Minion Pro",
                  fontSize: 16,
                }}
              >
                The preliminary state contests will hold virtually through
                voting online, tasks, monetized voting, ticket sales and any
                other model introduced by the management. Preliminary state
                contest will hold in each state for a specific period of time.
                Each state will produce a winner, 1st runner-up and 2nd
                runner-up. All three winners from each of he 5 states making 15
                winners will then proceed to represent their state at the
                Contest of Champions (CoC).
              </p>
            </li>
          </ul>
        </div>
        <div
          style={{
            marginBottom: 30,
            padding: "25px 15px",
            backgroundColor: "#333",
          }}
        >
          <h2
            style={{ textAlign: "center", marginBottom: 30, color: "#fff" }}
            className="f24"
          >
            HOSTING THE CONTEST OF CHAMPIONS (CoC)
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#fff",
              lineHeight: 1.3,
              fontFamily: "Minion Pro",
              fontSize: 24,
            }}
          >
            The preliminary state contests will hold virtually through voting
            online, tasks, monetized voting, ticket sales and any other model
            introduced by the management. Preliminary state contest will hold in
            each state for a specific period of time. Each state will produce a
            winner, 1st runner-up and 2nd runner-up. All three winners from each
            of he 5 states making 15 winners will then proceed to represent
            their state at the Contest of Champions (CoC).
          </p>
        </div>
        <section style={{ padding: "0 62px" }}>
          <div>
            <h2 style={{ marginBottom: 16, fontWeight: "500" }} className="f24">
              The Company
            </h2>
            {[
              `Emvirtue Network is made up of a team of stellar break away from the norm professional young men and women who have a depth of inspired imaginations, core brand strategy and innovation mechanics, experiential situational planning, guts, grit and energy in them.`,
              `Emvirtue Network owns Miss Olamma Africa Pageant, SME Economy Africa, Royal Woman Awards, Royal Baby Awards, Face of Aninri Pageant, Face of Okpanku Pageant, Okpanku Rising Magazine, Emvirtue Publishing, amongst others.`,
              `Established as an Integrated Service Company Emvirtue is thrust in multichannel business model that spreads across project management, media, entertainment, marketing communications, tech and consulting.`,
              `Emvirtue Network is a company to trust, invest and partner with. It is built upon integrity, dedication, and innovation.`,
            ].map((cont) => (
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(108, 108, 108, 1)",
                  marginBottom: 20,
                }}
              >
                {cont}
              </p>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <h2 style={{ marginBottom: 16, fontWeight: "500" }} className="f24">
              CEO
            </h2>
            <h3 style={{ marginBottom: 16, fontWeight: "500" }} className="f20">
              Ogbuefi Emmanuel Ezima
            </h3>
            {[
              `Emmanuel Ezima or Ogbuefi EM as he is popularly known, is the CEO of Emvirtue Network. He has had his stint in corporate Nigeria and now is settled to build up Emvirtue to a global brand. He trains corporate organizations and facilitates on topics cutting across Customer Service, Corporate Communications, Workplace Attitude Management, Corporate Culture, Personal Branding and Image Management etc.`,
              `He has been an integral part of the conceptualization and activation of several projects such as Beads and Arts Exhibition, SME Economy Conference and Awards, The National Higher Education Forum, Royal Baby Awards, Royal Woman Awards, Face of Okpanku Pageant; television commercials, voiceover, and billboards, for super brands like Etisalat, Peak Milk, Guinness, Power Horse Energy Drink, Golden Penny Prime, Vitafoam, Legend Extra Stout, Gulder, Good Mama Detergent, etcetera. He has also been in consultancy with and staffed for leading brands and marketing communication agencies like Insight Communications, TELL Communications, Elvira Saleras and Associates, etcetera.`,
              `In 2017, he founded and executed the Face of Okpanku Pageant, a platform he designed to discover, hone and export grassroot talents. In 2019, he also founded the SME Economy Africa Masterclass to train, equip and certify African startups to compete better in the global market. He has collaborated with United Bank for Africa (UBA), Coca Cola, and Vconnect in this effort.`,
              `Emmanuel founded Miss Olamma Africa Pageant in 2020, in the heat of the deadly corona virus and Nigeria’s national lockdown. He designed it as the biggest Igbo pageant in the world deploying tech and innovation as physical meetings were not possible. He has since gone on to establish the Olamma Africa Pathfinders Award and Olamma Magazine.`,
              `A graduate of English and Comparative Literature from Olabisi Onabanjo University, he has been interviewed on television, radio, newspaper, magazines and blogs. Emmanuel is a disruptive serial entrepreneur who brings a lot of vigor, electricity and creative metabolism to every place and task he is involved with. He is on upscale demand as a conference facilitator, corporate and social event host across different circles. He loves life and his personal mantra is “whatever the challenge, whatever the circumstance, live, as it all dies`,
            ].map((cont) => (
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(108, 108, 108, 1)",
                  marginBottom: 30,
                }}
              >
                {cont}
              </p>
            ))}
          </div>
          <div>
            <img
              src="./images/ceo.jpeg"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </div>
          <div style={{ marginTop: 40 }}>
            <h2 style={{ marginBottom: 10, fontWeight: "500" }} className="f24">
              Project Coordinator
            </h2>
            <h3 style={{ marginBottom: 16, fontWeight: "500" }} className="f20">
              Obianuju 'Tigi' Okoroafor
            </h3>
          </div>
          <div>
            <img
              src="./images/pc.jpeg"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </div>
        </section>
      </main>
      <div style={{ height: 400 }} />
    </div>
  );
}
