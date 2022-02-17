import React from "react";
import { Button, Input } from "..";

export const ComplainsSection = function () {
  return (
    <section
      style={{
        padding: "53px 30px 90px 30px",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
    >
      <div style={{ marginBottom: 105 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: 24,
            fontWeight: "700",
            fontFamily: "Typo Grotesk Black",
            marginBottom: 10,
          }}
        >
          Got a complain?
        </h2>
        <p
          style={{
            lineHeight: 1.5,
            color: "rgba(255,255,255,0.9)",
            fontSize: 14,
          }}
        >
          Emvirtue Network is made up of a team of stellar break away from the
          norm professional young men and women who have a depth of inspired
          imaginations, core brand strategy and innovation mechanics.
        </p>
      </div>
      <div>
        <Input placeholder="First Name" title="What’s your First name?" />
        <Input placeholder="Last Name" title="What’s your last name?" />

        <Input placeholder="Email" title="What’s your last email address?" />

        <Input placeholder="Message" title="Give us your message" />
        <Button
          title="Send message"
          bg="rgba(255, 255, 255, 1)"
          fg="rgba(0, 0, 0, 1)"
          style={{ width: "100%", marginTop: 30 }}
        />
      </div>
    </section>
  );
};
