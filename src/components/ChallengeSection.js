import React from "react";
import "../styles/Challenge.css";

function ChallengeSection() {
  return (
    <section className="challenge">
      <h2>💡 The Challenge: 48-Hour Virtual Hackathon</h2>
      <p>
        We're hosting a virtual hackathon hiring event designed to test your creativity,
        technical depth, and product thinking.
      </p>

      <ul>
        <li>Friday, Nov 14 – Problem statements released at 3 PM</li>
        <li>Sunday, Nov 16 – Submission deadline at 3 PM</li>
        <li>Monday, Nov 17 – Winners announced at 3 PM</li>
      </ul>
    </section>
  );
}

export default ChallengeSection;
