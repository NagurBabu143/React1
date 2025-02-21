import React from "react";

import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import "./Travel.css";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";

const Travel = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <div>
          <Home />
        </div>

        <div id="Destinations" className="section">
          <h2>Destinations</h2>
          <p>Explore amazing places around the world.</p>
          <ul className="destinations-list">
            <li>
              <img
                src="/images/paris.jpg"
                alt="Paris, France - The City of Light"
              />
              <span>Paris, France - The City of Light</span>
            </li>
            <li>
              <img
                src="/images/tokyo.jpg"
                alt="Tokyo, Japan - A Blend of Tradition and Modernity"
              />
              <span>Tokyo, Japan - A Blend of Tradition and Modernity</span>
            </li>
            <li>
              <img
                src="/images/newyork.jpg"
                alt="New York, USA - The City That Never Sleeps"
              />
              <span>New York, USA - The City That Never Sleeps</span>
            </li>
            <li>
              <img
                src="/images/capetown.jpg"
                alt="Cape Town, South Africa - Nature's Masterpiece"
              />
              <span>Cape Town, South Africa - Nature's Masterpiece</span>
            </li>
            <li>
              <img
                src="/images/bali.jpg"
                alt="Bali, Indonesia - The Island of Gods"
              />
              <span>Bali, Indonesia - The Island of Gods</span>
            </li>
          </ul>
        </div>

        <div className="body-container">
          <Body />
        </div>

        <div id="About" className="section">
          <h2>About Us</h2>
          <p>Learn more about our mission and values.</p>
          <p>
            At Travel Destination Explorer, we aim to inspire travelers to
            explore the beauty of our planet. Our team is dedicated to providing
            you with the best travel tips and destination guides.
          </p>
        </div>

       

        <div id="Gallery" className="section">
          <h2>Gallery</h2>
          <p>Check out our stunning photos from various destinations.</p>
          <div className="gallery">
            <img
              src="/images/gallery1.jpg"
              alt="Stunning view from a destination"
            />
            <img src="/images/gallery2.jpg" alt="Beautiful sunset at a beach" />
            <img src="/images/gallery3.jpg" alt="Mountain landscape" />
          </div>
        </div>
        
        <div id="Contact" className="section">
          <Contact/>
        </div>

        <div id="Testimonials" className="section">
          <h2>Testimonials</h2>
          <p>Read what our customers have to say about their experiences.</p>
          <blockquote>
            "This website helped me discover amazing places! I had the best
            vacation ever!" - Jane Doe
          </blockquote>
          <blockquote>
            "Fantastic resource for travel planning. Highly recommended!" - John
            Smith
          </blockquote>
        </div>

        <div id="Blog" className="section">
          <h2>Blog</h2>
          <p>Find travel tips, guides, and stories on our blog.</p>
          <ul>
            <li>
              <a href="#TravelTips">
                Top 10 Travel Tips for First-Time Travelers
              </a>
            </li>
            <li>
              <a href="#PackingGuide">Essential Packing Guide for Every Trip</a>
            </li>
            <li>
              <a href="#DestinationGuide">
                The Ultimate Guide to Backpacking in Europe
              </a>
            </li>
          </ul>
        </div>

        <div id="FAQ" className="section">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common queries about our services.</p>
          <ul>
            <li>
              <strong>What types of trips do you offer?</strong> We offer a wide
              range of trips, including adventure travel, cultural experiences,
              and family vacations.
            </li>
            <li>
              <strong>How can I book a trip?</strong> You can book your trip
              directly on our website or contact our customer service for
              assistance.
            </li>
            <li>
              <strong>Do you provide travel insurance?</strong> Yes, we offer
              travel insurance options for all our trips.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Travel;
