import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='About Us' className="about">
            <h2>About Us</h2>
            <p>We are dedicated to making your events successful and memorable.</p>
            <div className="about-content">
                <div className="mission">
                    <h3>Our Mission</h3>
                    <p>To provide exceptional event management services that exceed expectations.</p>
                </div>
                <div className="vision">
                    <h3>Our Vision</h3>
                    <p>To be the leading event management company known for innovative ideas and flawless execution.</p>
                </div>
                <div className="values">
                    <h3>Our Values</h3>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Customer Satisfaction</li>
                        <li>Collaboration</li>
                        <li>Excellence</li>
                    </ul>
                </div>
            </div>
            <div className="team">
                <h3>Meet Our Team</h3>
                <p>Our dedicated team of professionals is here to make your event a success.</p>
                <div className="team-member">
                    <img src="/images/team1.jpg" alt="Team Member 1" className="team-image" />
                    <p>Jane Doe - Event Coordinator</p>
                </div>
                <div className="team-member">
                    <img src="/images/team2.jpg" alt="Team Member 2" className="team-image" />
                    <p>John Smith - Logistics Manager</p>
                </div>
                <div className="team-member">
                    <img src="/images/team3.jpg" alt="Team Member 3" className="team-image" />
                    <p>Alice Johnson - Marketing Specialist</p>
                </div>
            </div>
        </div>
    );
};

export default About;
