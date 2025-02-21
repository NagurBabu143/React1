import React from "react";
import "./AboutUs.css";

function AboutUs() {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>About Us</h2>
                <p>
                    At Railway Services, we are dedicated to providing seamless and reliable train services to our customers. Our mission is to ensure that your travel experience is as comfortable and efficient as possible. 
                </p>
                <p>
                    With a focus on safety, punctuality, and customer satisfaction, we strive to connect people and places across the country. Our modern trains are equipped with the latest technology, ensuring a smooth ride for all our passengers.
                </p>
                <p>
                    We pride ourselves on our exceptional customer service and commitment to sustainability. Our dedicated team works around the clock to ensure your journey is memorable and hassle-free.
                </p>
                <div className="values">
                    <h3>Our Values</h3>
                    <ul>
                        <li>Customer Focus</li>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
                <div className="team">
                    <h3>Meet Our Team</h3>
                    <p>
                        Our team consists of experienced professionals who are passionate about rail travel. From engineers to customer service representatives, each member plays a crucial role in delivering exceptional service.
                    </p>
                    <ul className="team-members">
                        <li>Shaik  - CEO</li>
                        <li>babu - Chief Operations Officer</li>
                        <li>Nagur Shaik - Customer Service Manager</li>
                        <li>NagurBabu - Chief Engineer</li>
                    </ul>
                </div>
            </div>
            <div className="about-image">
                <img src="/images/about-us.jpg" alt="About Us" />
            </div>
        </section>
    );
}

export default AboutUs;
