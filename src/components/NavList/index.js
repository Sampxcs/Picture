import React from "react";
import { Link } from "wouter";
import "./NavList.css";

export default function NavList() {
  return (
    <ul className="nav-ul">
      <li>
        <Link to="#">POSTS</Link>
        <div className="nav-ul-list">
          <ul>
            <li>
              <Link to="#">Discover Photos</Link>
            </li>
            <li>
              <Link to="#">Beautiful Videos</Link>
            </li>
            <li>
              <Link to="#">Challenges</Link>
            </li>
            <li>
              <Link to="#">Nature Blog</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/Explore">EXPLORE</Link>
        <div className="nav-ul-list">
          <ul>
            <li>
              <Link to="/Explore">Discover Photos</Link>
            </li>
            <li>
              <Link to="/Explore/Landscape">Landscape</Link>
            </li>
            <li>
              <Link to="/Explore/Forest">Forest</Link>
            </li>
            <li>
              <Link to="/Explore/Osean">Ocean Life</Link>
            </li>
            <li>
              <Link to="/Explore/Sky">Sky</Link>
            </li>
            <li>
              <Link to="/Explore/Flowers">Flowers</Link>
            </li>
            <li>
              <Link to="/Explore/Videos%20Nature">Videos</Link>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="#">ACTIVITY</Link>
      </li>
      <li>
        <Link to="#">PROFILE</Link>
        <div className="nav-ul-list profile">
          <ul>
            <li>
              <Link to="">Your Collections</Link>
            </li>
            <li>
              <Link to="">Change Lenguage</Link>
            </li>
            <li>
              <Link to="">Settings</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
            <li>
              <Link to="/AboutDeveloper">About Developer</Link>
            </li>
            <hr />
            <li>
              <a
                href="https://www.pexels.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Photos provided by Pexels
                <img
                  src="https://images.pexels.com/lib/api/pexels.png"
                  alt="Pexels"
                />
              </a>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
