import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us" id="aboutus">
      <h2>About Us</h2>
      <p>
        We are a leading real estate company dedicated to finding your dream property. Our team of experienced professionals is committed to providing exceptional service and guidance throughout the buying and selling process.
      </p>
      <h3>Our History</h3>
      <p>
        Founded in 2010, we have built a reputation for excellence in the real estate industry. Over the years, we have helped countless clients achieve their real estate goals, making us one of the most trusted names in the market.
      </p>
      <h3>Our Mission</h3>
      <p>
        Our mission is to simplify the real estate process and provide our clients with the knowledge and resources they need to make informed decisions. We strive to create lasting relationships based on trust and integrity.
      </p>
      <h3>Meet Our Team</h3>
      <div className="team-container">
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="Team Member 1" className="team-image" />
          <h4>John Doe</h4>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Team Member 2" className="team-image" />
          <h4>Jane Smith</h4>
          <p>Head of Sales</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member3.jpg" alt="Team Member 3" className="team-image" />
          <h4>Emily Johnson</h4>
          <p>Client Relations</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
