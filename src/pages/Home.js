import React from "react";
import { BsTruck } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GiVacuumCleaner } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { GiChemicalDrop } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { MdMobileScreenShare } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { GiPositionMarker } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <div className="banner-container">
        <div>
          <h1>Your all purpose supplier</h1>
          <BsTruck className="car" />
        </div>
        <div className="divider"></div>
        <div className="check-con">
          <p>
            <AiOutlineCheckCircle className="check" />
            Fast delivery
          </p>
          <p>
            <AiOutlineCheckCircle className="check" />
            Best price
          </p>
          <p>
            <AiOutlineCheckCircle className="check" />
            God service
          </p>
        </div>
        <div className="btn-container">
          <button className="btn">
            <Link to="/contact" className="btn-link">
              Contact
            </Link>
          </button>
          <button className="btn">
            <Link to="/services" className="btn-link">
              Services
            </Link>
          </button>
        </div>
      </div>
      <div className="supp-container">
        <div className="spc">
          <GiVacuumCleaner className="iicc" />
          <p>Clenaing</p>
          <div className="delare"></div>
        </div>
        <div className="spc">
          <GiOfficeChair className="iicc" />
          <p>Office</p>
          <div className="delare"></div>
        </div>
        <div className="spc">
          <GiChemicalDrop className="iicc" />
          <p>Chemical</p>
          <div className="delare"></div>
        </div>
        <div className="spc">
          <MdConstruction className="iicc" />
          <p>Construct</p>
          <div className="delare"></div>
        </div>
      </div>
      <div className="reklam-container">
        <div className="con">
          <h1>We deliver in hole Zanzibar</h1>

          <div className="divider"></div>
        </div>
        <div className="fot">
          <form
            className="home-form"
            action="https://formspree.io/f/mayaoryk"
            method="POST"
          >
            <h2>Contact us</h2>
            <input type="text" placeholder="Name" name="nameGerrard" />
            <input type="text" placeholder="Email" name="emailGerrard" />
            <input type="text" placeholder="Phone" name="phoneGerrard" />
            <button type="submit">Send</button>
          </form>
          <div className="fot-icons">
            <a href="tel:+255779912498">
              <MdMobileScreenShare className="ftic" />
            </a>
            <a href="mailto: louiestokk@gmail.com">
              <HiOutlineMail className="ftic" />
            </a>
            <a
              href="https://www.google.com.tr/maps/place/Mji+Mkongwe,+Zanzibar/@-6.1625492,39.1930146,15z/data=!3m1!4b1!4m5!3m4!1s0x185cd059242fbd01:0x9a18e54b0e5a94d8!8m2!3d-6.162222!4d39.1920735"
              target="_blank"
            >
              <GiPositionMarker className="ftic" />
            </a>
          </div>
          <p>© All Rights Reserved 3M Limited, Stone Town Zanzibar </p>
          <span className="stokk">Developer / Stokk Tech Limited</span>
        </div>
      </div>
    </>
  );
};

export default Home;
