import React from "react";
import profile from "../../assets/images/about/profile.png";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "../../utlits/animations/slideUp";
const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2>I'm Ntando, a Software Engineer</h2>
                <p>
                  I am based in Cape Town, I specialize in software development
                  and IT systems professional. My expertise spans full-stack
                  development, information systems, and secure software
                  solutions. I’ve built projects such as an Employee Management
                  System using React and Spring Boot, a URL Shortener
                  application in Java, and a C#.Net-based Hotel Booking System,
                  each enhancing my skills in front-end and back-end
                  integration, data handling, and user authentication.
                </p>
                <p>
                  Currently, I am a tutor at UCT, where I support students in
                  their academic journey while also interning as a Java
                  developer with HexSoftwares. I'm excited to leverage my skills
                  to create impactful solutions in dynamic environments.
                </p>
                <div className="hero-btns">
                  <a href="contact.html" className="theme-btn">
                    Get In Touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
