import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <a href="#plans">Plans</a>
          <ul>
            <li><a href="#double-bedroom">Double Bedroom</a></li>
            <li><a href="#single-bedroom">Single Bedroom</a></li>
            <li><a href="#three-bedroom">Three Bedroom</a></li>
            <li><a href="#studio">Studio Apartment</a></li>
            <li><a href="#penthouse">Penthouse</a></li>
            <li><a href="#duplex">Duplex</a></li>
            <li><a href="#villa">Villa</a></li>
            <li><a href="#townhouse">Townhouse</a></li>
          </ul>
        </li>
        <li>
          <a href="#interior">Interior</a>
          <ul>
            <li><a href="#bedroom">Bedroom</a></li>
            <li><a href="#hall">Hall</a></li>
            <li><a href="#kitchen">Kitchen</a></li>
            <li><a href="#bathroom">Bathroom</a></li>
            <li><a href="#dining">Dining Room</a></li>
            <li><a href="#living-room">Living Room</a></li>
            <li><a href="#office">Office</a></li>
            <li><a href="#basement">Basement</a></li>
          </ul>
        </li>
        <li>
          <a href="#plumbing">Plumbing</a>
          <ul>
            <li><a href="#pipes">Pipes</a></li>
            <li><a href="#fittings">Fittings</a></li>
            <li><a href="#fixtures">Fixtures</a></li>
            <li><a href="#drainage">Drainage</a></li>
            <li><a href="#valves">Valves</a></li>
            <li><a href="#water-heater">Water Heater</a></li>
          </ul>
        </li>
        <li>
          <a href="#electricals">Electricals</a>
          <ul>
            <li><a href="#wiring">Wiring</a></li>
            <li><a href="#switches">Switches</a></li>
            <li><a href="#lighting">Lighting</a></li>
            <li><a href="#outlets">Outlets</a></li>
            <li><a href="#safety-devices">Safety Devices</a></li>
            <li><a href="#circuit-breakers">Circuit Breakers</a></li>
          </ul>
        </li>
        <li>
          <a href="#materials">Materials</a>
          <ul>
            <li>
              <a href="#cement">Cement</a>
              <ul>
                <li><a href="#type1">Type 1</a></li>
                <li><a href="#type2">Type 2</a></li>
                <li><a href="#type3">Type 3</a></li>
                <li><a href="#quick-setting">Quick Setting</a></li>
              </ul>
            </li>
            <li>
              <a href="#iron">Iron</a>
              <ul>
                <li><a href="#bars">Bars</a></li>
                <li><a href="#sheets">Sheets</a></li>
                <li><a href="#rods">Rods</a></li>
                <li><a href="#wire">Wire</a></li>
                <li><a href="#angles">Angles</a></li>
              </ul>
            </li>
            <li>
              <a href="#bricks">Bricks</a>
              <ul>
                <li><a href="#red-bricks">Red Bricks</a></li>
                <li><a href="#fly-ash-bricks">Fly Ash Bricks</a></li>
                <li><a href="#concrete-bricks">Concrete Bricks</a></li>
                <li><a href="#hollow-bricks">Hollow Bricks</a></li>
                <li><a href="#refractory-bricks">Refractory Bricks</a></li>
              </ul>
            </li>
            <li>
              <a href="#tiles">Tiles</a>
              <ul>
                <li><a href="#ceramic-tiles">Ceramic Tiles</a></li>
                <li><a href="#porcelain-tiles">Porcelain Tiles</a></li>
                <li><a href="#vinyl-tiles">Vinyl Tiles</a></li>
                <li><a href="#natural-stone">Natural Stone</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#works">Works</a>
          <ul>
            <li><a href="#completed">Completed Works</a></li>
            <li><a href="#pending">Pending Works</a></li>
            <li><a href="#ongoing">Ongoing Works</a></li>
            <li><a href="#scheduled">Scheduled Works</a></li>
            <li><a href="#upcoming">Upcoming Works</a></li>
          </ul>
        </li>
        <li>
          <a href="#locations">Locations</a>
          <ul>
            <li><a href="#site-a">Site A</a></li>
            <li><a href="#site-b">Site B</a></li>
            <li><a href="#site-c">Site C</a></li>
            <li><a href="#site-d">Site D</a></li>
            <li><a href="#site-e">Site E</a></li>
          </ul>
        </li>
        <li>
          <a href="#contact">Contact</a>
          <ul>
            <li><a href="#email">Email</a></li>
            <li><a href="#phone">Phone</a></li>
            <li><a href="#office-location">Office Location</a></li>
            <li><a href="#social-media">Social Media</a></li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
