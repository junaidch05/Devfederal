import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileRetro,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import Image from "next/image";
import dfblue from "../../public/dfblue.png";
import fb from "../../public/facebook.png";
import ig from "../../public/instgram.png";
import mail from "../../public/mail.png";
import ln from "../../public/linkdin.png";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
          <div className="main">
            <div className="footer-logo">
              <Image
                src={dfblue}
                alt="dev federal"
                className="footer-logo-image"
              />
            </div>
            <p>
              Choose Dev Federal today and experience the power of
              transformative digital solutions that redefine success.
            </p>
            <div className="sci">
              <div className="socialimage">
                <Link href="https://www.facebook.com/people/Dev-federal/100094993991371/">
                  <Image
                    src={fb}
                    alt="facebook"
                    className="socialimageholder"
                  />
                </Link>
              </div>
              <div className="socialimage">
                <Link href="https://www.instagram.com/devfederal.official/">
                  <Image
                    src={ig}
                    alt="instagram"
                    className="socialimageholder"
                  />
                </Link>
              </div>{" "}
              <div className="socialimage">
                <Link href="https://www.linkedin.com/company/devfederal/">
                  <Image
                    src={ln}
                    alt="linkdin"
                    className="socialimageholder"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="sec quicklinks">
            <h2>Navigation</h2>
            <Link className="footer-link" href="/">
              Home
            </Link>
            <Link className="footer-link" href="/services">
              Services
            </Link>
            <Link className="footer-link" href="/career">
              Career
            </Link>
            <Link className="footer-link" href="/contact">
              Contact us
            </Link>
            <Link className="footer-link" href="/contact">
              Hire a devloper
            </Link>
          </div>
          <div className="sec quicklinks">
            <h2>Services</h2>
            <Link className="footer-link" href="/services/web-development">
              Web app development
            </Link>
            <Link className="footer-link" href="/services/ui-designing">
              UI/UX designing
            </Link>
            <Link className="footer-link" href="/services/graphic-designing">
              Graphic designing
            </Link>
            <Link className="footer-link" href="/services/seo">
              Search engine optimization
            </Link>
          </div>
          <div className="sec contact">
            <h2>Contact</h2>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="mailto:info@devfederal.com" className="mail">
                info@devfederal.com
              </a>
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faLocationDot} />
              </span>{" "}
              127 Civic Center Sabzazar LHR
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faMobileRetro} />
              </span>
              +92 312 4028373
            </p>
          </div>
        </div>

        <div className="credit"> © Copyright 2023 All Rights Reserved</div>
      </section>
    </>
  );
}
