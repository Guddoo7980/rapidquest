import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h3 className="subheading">HIRING CHALLENGE</h3>

      <h1 className="title">
        Build the Future of <br />
        <span>AI-Powered Marketing</span>
      </h1>

      <p className="description">
        Join our exclusive hiring hackathon event to solve real-world problems,
        showcase your skills, and land a high-impact role on our engineering team.
      </p>

      <div className="details">
        <div>
          <h4>Role</h4>
          <p>Full Stack Developer</p>
        </div>
        <div>
          <h4>Starting Salary</h4>
          <p>6 Lakhs / year</p>
        </div>
        <div>
          <h4>Probation (6 Months)</h4>
          <p>20K / month</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
