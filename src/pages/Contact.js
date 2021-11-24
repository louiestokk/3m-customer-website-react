import React from "react";
import { MdMobileScreenShare } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { GiPositionMarker } from "react-icons/gi";

const Contact = () => {
  return (
    <>
      <div className="fot">
        <div className="num">
          <a href="tel:+255779912498">
            Call to Zantel
            <MdMobileScreenShare className="ftic" />
          </a>
          <a href="tel:+255779912498">
            Call to Tigo
            <MdMobileScreenShare className="ftic" />
          </a>
        </div>
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
          {/* <a href="tel:+255779912498">
            <MdMobileScreenShare className="ftic" />
          </a> */}
          <a href="mailto: mzeemm1982@gmail.com">
            <HiOutlineMail className="ftic" />
          </a>
          <a
            href="https://www.google.com.tr/maps/place/Mji+Mkongwe,+Zanzibar/@-6.1625492,39.1930146,15z/data=!3m1!4b1!4m5!3m4!1s0x185cd059242fbd01:0x9a18e54b0e5a94d8!8m2!3d-6.162222!4d39.1920735"
            target="_blank"
          >
            <GiPositionMarker className="ftic" />
          </a>
        </div>
        <p>© All Rights Reserved Tripple M Limited, Stone Town Zanzibar </p>
        <span className="stokk">Developer / Stokk Tech Limited</span>
      </div>
    </>
  );
};

export default Contact;
