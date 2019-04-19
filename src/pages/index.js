import React from "react";
import Link from "gatsby-link";
import Images from "../images";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import MediaQuery from "react-responsive";
import Navbar from "./nav";

const {
  Logo,
  Heroimage,
  Learning,
  Infrastructure,
  Analytics,
  Modeling,
  Course,
  Fulllogo,
  Shuming,
  Timothy,
  MobileBanner
} = Images;

const styles = {
  navi: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  NaviItem: { display: "flex", flexDirection: "row", marginRight: "55px" },
  NaviItemmobile: {
    display: "flex",
    flexDirection: "row",
    marginRight: "36px",
    fontSize: "24px"
  },

  emphasis: {
    fontWeight: "700"
  },
  one: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "85%"
  },
  onemobile: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "85%",
    alignItems: "center"
  },
  three: {
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "center",
    flex: "1"
  },
  threemobile: {
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center"
  },
  two: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "70%",
    alignItems: "center"
  },
  twomobile: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "85%",
    alignItems: "center"
  },
  five: {
    textAlign: "center",
    maxWidth: "50%",
    marginRight: "auto",
    marginLeft: "auto",
    paddingRight: "30px"
  },
  fivemobile: {
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "50px"
  },
  studypic: {
    marginRight: "auto",
    marginLeft: "auto",
    textAlign: "center",
    maxWidth: "100%"
  },
  six: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "55%",
    alignItems: "center"
  },
  sixmobile: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "85%",
    alignItems: "center",
    textAlign: "center"
  },
  centeralign: {
    textAlign: "center",
    color: "white"
  },
  TeamMembers: {
    display: "flex",
    maxWidth: "50%",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  TeamMembersmobile: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center"
  },
  icon: {
    width: "170px",
    maxWidth: "60%"
  },
  smicon: {
    fontSize: "30px",
    color: "grey",
    marginLeft: "10px",
    marginRight: "10px"
  }
};

const ColoredLine = ({ color }) => (
  <hr
    style={{
      backgroundColor: color,
      border: 1,
      height: 2,
      maxWidth: "40%",
      marginTop: "80px"
    }}
  />
);

const buttonStyles = {
  default: {
    background: "#F2F2F2",
    height: "50px",
    width: "200px",
    fontSize: "15px",
    fontWeight: "600",
    borderRadius: "30px",
    fontFamily: "Montserrat",
    marginTop: "20px"
  },
  hover: {
    cursor: "pointer"
  }
};

const MyOwnButton = props => {
  const { text = "Button", style = {} } = props;
  return (
    <button
      style={{
        ...buttonStyles.default,
        ...buttonStyles.hover,
        ...props.style,
        ...style
      }}
    >
      {text}
    </button>
  );
};

const Navigation = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <div style={styles.navi}>
          <div>
            <img
              style={{ maxWidth: "100px", marginLeft: "20%" }}
              src={Logo}
              alt=""
            />
          </div>
          <div>
            <div style={styles.NaviItem}>
              <Link to="/#Expertise" class="navi">
                <h4>EXPERTISE</h4>
              </Link>
              <Link to="/#DS" class="navi">
                <h4>DATA SCIENCE COURSE</h4>
              </Link>
              <Link to="/#Team" class="navi">
                <h4>TEAM</h4>
              </Link>
              <Link to="/#ContactUs" class="navi">
                <h4>CONTACT</h4>
              </Link>
              <a
                target="_blank"
                href="https://medium.com/uptick-blog"
                class="navi"
              >
                <h4>BLOG</h4>
              </a>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <div style={styles.navi}>
          <div>
            <img
              style={{ maxWidth: "100px", marginLeft: "16px" }}
              src={Logo}
              alt=""
            />
          </div>
          <div>
            <Navbar />
            {/* <div style={styles.NaviItem}>
              <Link to="/#Expertise" class="navi">
                <h4>EXPERTISE</h4>
              </Link>
              <Link to="/#DS" class="navi">
                <h4>DATA SCIENCE COURSE</h4>
              </Link>
              <Link to="/#Team" class="navi">
                <h4>TEAM</h4>
              </Link>
              <Link to="/#ContactUs" class="navi">
                <h4>CONTACT</h4>
              </Link>
              <a
                target="_blank"
                href="https://medium.com/uptick-blog"
                class="navi"
              >
                <h4>BLOG</h4>
              </a>
            </div> */}
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 476px)">
        <img
          style={{
            width: "100%",
            maxWidth: "100%"
          }}
          src={Heroimage}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "270px",
            left: "60%",
            width: "400px",
            height: "100%",
            textAlign: "center"
          }}
        >
          <h1>UpTick</h1>
          <h3>
            We love data and the work we do. We work closely with our clients to
            deliver the best possible solutions for their needs.
          </h3>
          <Link to="/#ContactUs">
            <MyOwnButton text="Contact us today" />
          </Link>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 475px)">
        <img
          style={{
            width: "100%",
            height: "700px"
          }}
          src={MobileBanner}
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: 0,
            right: 0,
            width: "85%",
            height: "100%",
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h1>UpTick</h1>
          <h3>
            We love data and the work we do. We work closely with our clients to
            deliver the best possible solutions for their needs.
          </h3>
          <Link to="/#ContactUs">
            <MyOwnButton text="Contact us today" />
          </Link>
        </div>
      </MediaQuery>
    </div>
  );
};

const Expertise = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 476px)">
        <div id="Expertise">
          <h2>EXPERTISE</h2>
          <div style={styles.one}>
            <div style={styles.three}>
              <img style={styles.icon} src={Learning} alt="" />
              <h5>Learning</h5>
              <p>
                New to Data Science? Not to worry, join our Intro to Data
                Science course to{" "}
                <span
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  <a
                    target="_blank"
                    href="https://github.com/shumingpeh/weekly-data-science/blob/master/README.md"
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >
                    learn more
                  </a>
                </span>
                .
              </p>
            </div>
            <div style={styles.three}>
              <img style={styles.icon} src={Infrastructure} alt="" />
              <h5>Infrastructure</h5>
              <p>
                Half the battle is won with a robust and structured data
                infrastructure. We can help you to achieve it.
              </p>
            </div>
            <div style={styles.three}>
              <img style={styles.icon} src={Analytics} alt="" />
              <h5>Analytics</h5>
              <p>
                How can I improve my conversion rate? Why are my products not
                selling well? Fret not, we can assist you to answer these
                questions.
              </p>
            </div>
            <div style={styles.three}>
              <img style={styles.icon} src={Modeling} alt="" />
              <h5>Modeling</h5>
              <p>
                Providing simple yet elegant models to solve your needs is what
                we thrive for.
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 475px)">
        <div id="Expertise">
          <h2>EXPERTISE</h2>
          <div style={styles.onemobile}>
            <div style={styles.threemobile}>
              <img style={styles.icon} src={Learning} alt="" />
              <h5>Learning</h5>
              <p>
                New to Data Science? Not to worry, join our Intro to Data
                Science course to{" "}
                <span
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  <a
                    target="_blank"
                    href="https://github.com/shumingpeh/weekly-data-science/blob/master/README.md"
                    style={{
                      textDecoration: "none",
                      color: "white"
                    }}
                  >
                    learn more
                  </a>
                </span>
                .
              </p>
            </div>
            <div style={styles.threemobile}>
              <img style={styles.icon} src={Infrastructure} alt="" />
              <h5>Infrastructure</h5>
              <p>
                Half the battle is won with a robust and structured data
                infrastructure. We can help you to achieve it.
              </p>
            </div>
            <div style={styles.threemobile}>
              <img style={styles.icon} src={Analytics} alt="" />
              <h5>Analytics</h5>
              <p>
                How can I improve my conversion rate? Why are my products not
                selling well? Fret not, we can assist you to answer these
                questions.
              </p>
            </div>
            <div style={styles.threemobile}>
              <img style={styles.icon} src={Modeling} alt="" />
              <h5>Modeling</h5>
              <p>
                Providing simple yet elegant models to solve your needs is what
                we thrive for.
              </p>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

const DSCourse = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 476px)">
        <div id="DS">
          <h2>DATA SCIENCE COURSE</h2>
          <div style={styles.two}>
            <div style={styles.five}>
              <p>
                We are currently still backdating and creating lesson slides for our course. We hope to have it completed this year, and translate it into an actual online course on udemy sometime late this year too.
              </p>
              <p>
                Do reach out if you are interested!
              </p>
              <a
                target="_blank"
                href="https://github.com/shumingpeh/weekly-data-science/blob/master/README.md"
              >
                <MyOwnButton text="Read more" />
              </a>
            </div>
            <div>
              <img style={styles.studypic} src={Course} alt="" />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 475px)">
        <div id="DS">
          <h2>DATA SCIENCE COURSE</h2>
          <div style={styles.twomobile}>
            <div style={styles.fivemobile}>
              <p>
                We are currently still backdating and creating lesson slides for
                our course. We hope to have it completed by end of February
                2019, and translate it into an actual online course on udemy
                sometime in April 2019.
              </p>
              <p>
                As of now, we are teaching every Saturday from 1030 - 1330 at 39
                Robinson Road, Level 9. Do reach out if you are interested; at
                the moment, we are at part 8.
              </p>
              <a
                target="_blank"
                href="https://github.com/shumingpeh/weekly-data-science/blob/master/README.md"
              >
                <MyOwnButton text="Read more" />
              </a>
            </div>
            <div>
              <img style={styles.studypic} src={Course} alt="" />
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 476px)">
        <div id="Team">
          <h2>TEAM</h2>
          <div style={styles.six}>
            <div
              style={{
                marginRight: "30px"
              }}
            >
              <h5>Our Goals</h5>
              <p>
                UpTick is made up of two data science professionals, ShuMing and
                Timothy. There are a few motivations of starting UpTick.{" "}
              </p>
              <p>
                We hope to apply{" "}
                <span style={styles.emphasis}>
                  data science for SME/start ups{" "}
                </span>
                that might not have considered it or have little funding but
                still wish to leverage from data science.
              </p>
              <p>
                {" "}
                We are currently creating an{" "}
                <span style={styles.emphasis}>online data science course</span>,
                that focuses on the mathematical foundation in hope to bridge
                the gap of understanding the underlying components of (ML)
                models.{" "}
              </p>
              <p>
                {" "}
                We hope to educate the public (or clients) with our{" "}
                <span style={styles.emphasis}>blog</span>, of what data science
                can solve and make it relatable with our daily problems and
                musings.
              </p>
            </div>
            <div>
              <img
                style={{
                  maxHeight: "200px"
                }}
                src={Fulllogo}
                alt=""
              />
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 475px)">
        <div id="Team">
          <h2>TEAM</h2>
          <div style={styles.sixmobile}>
            <div>
              <h5>Our Goals</h5>
              <p>
                UpTick is made up of two data science professionals, ShuMing and
                Timothy. There are a few motivations of starting UpTick.{" "}
              </p>
              <p>
                We hope to apply{" "}
                <span style={styles.emphasis}>
                  data science for SME/start ups{" "}
                </span>
                that might not have considered it or have little funding but
                still wish to leverage from data science.
              </p>
              <p>
                {" "}
                We are currently creating an{" "}
                <span style={styles.emphasis}>online data science course</span>,
                that focuses on the mathematical foundation in hope to bridge
                the gap of understanding the underlying components of (ML)
                models.{" "}
              </p>
              <p>
                {" "}
                We hope to educate the public (or clients) with our{" "}
                <span style={styles.emphasis}>blog</span>, of what data science
                can solve and make it relatable with our daily problems and
                musings.
              </p>
            </div>
            <div>
              <img
                style={{
                  maxHeight: "200px"
                }}
                src={Fulllogo}
                alt=""
              />
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 476px)">
        <div>
          <div style={styles.six}>
            <h5>Team Members</h5>
          </div>
          <div style={styles.six}>
            <div>
              <div style={{ display: "flex" }}>
                <div style={styles.TeamMembers}>
                  <img style={{ maxWidth: "240px" }} src={Shuming} alt="" />
                  <h5>Peh Shu Ming</h5>
                  <p
                    style={{
                      maxWidth: "80%",
                      height: "180px"
                    }}
                  >
                    I am a Data Scientist at Skyscanner, overlooking its
                    non-flight verticals, and currently working on predictive
                    models for user behavior and SEO ranking. For more
                    information, check out my{" "}
                    <span>
                      {" "}
                      <a
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontWeight: "700"
                        }}
                        target="_blank"
                        href="https://shumingpeh.github.io/portfolio/"
                      >
                        personal website
                      </a>
                    </span>
                    .
                  </p>
                  <div styles={{ display: "flex" }}>
                    <a target="_blank" href="https://github.com/shumingpeh">
                      <FaGithub style={styles.smicon} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/shuming-peh"
                    >
                      <FaLinkedin style={styles.smicon} />
                    </a>
                  </div>
                </div>
                <div style={styles.TeamMembers}>
                  <img style={{ maxWidth: "240px" }} src={Timothy} alt="" />
                  <h5>Timothy Ong</h5>
                  <p
                    style={{
                      maxWidth: "80%",
                      height: "180px"
                    }}
                  >
                    I am currently a Data Analyst at Shopee, an e-commerce
                    company. I am experienced in building and maintaining data
                    pipelines, data reporting, and data visualizations. Being
                    passionate in data analytics, I have decided to help
                    businesses and individuals make better decisions with data.
                  </p>
                  <div
                    styles={{
                      display: "flex",
                      alignSelf: "flex-end"
                    }}
                  >
                    <a target="_blank" href="https://github.com/ttimong">
                      <FaGithub style={styles.smicon} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/tim-ong/"
                    >
                      <FaLinkedin style={styles.smicon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 475px)">
        <div>
          <div style={styles.sixmobile}>
            <h5>Team members</h5>
          </div>
          <div style={styles.sixmobile}>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={styles.TeamMembersmobile}>
                  <img style={{ maxWidth: "240px" }} src={Shuming} alt="" />
                  <h5>Peh Shu Ming</h5>
                  <p>
                    I am a Data Scientist at Skyscanner, overlooking its
                    non-flight verticals, and currently working on predictive
                    models for user behavior and SEO ranking. For more
                    information, check out my{" "}
                    <span>
                      {" "}
                      <a
                        style={{
                          color: "white",
                          textDecoration: "none",
                          fontWeight: "700"
                        }}
                        target="_blank"
                        href="https://shumingpeh.github.io/portfolio/"
                      >
                        personal website
                      </a>
                    </span>
                    .
                  </p>
                  <div styles={{ display: "flex" }}>
                    <a target="_blank" href="https://github.com/shumingpeh">
                      <FaGithub style={styles.smicon} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/shuming-peh"
                    >
                      <FaLinkedin style={styles.smicon} />
                    </a>
                  </div>
                </div>
                <div style={styles.TeamMembersmobile}>
                  <img
                    style={{ maxWidth: "240px", paddingTop: "50px" }}
                    src={Timothy}
                    alt=""
                  />
                  <h5>Timothy Ong</h5>
                  <p>
                    I am currently a Data Analyst at Shopee, an e-commerce
                    company. I am experienced in building and maintaining data
                    pipelines, data reporting, and data visualizations. Being
                    passionate in data analytics, I have decided to help
                    businesses and individuals make better decisions with data.
                  </p>
                  <div
                    styles={{
                      display: "flex"
                    }}
                  >
                    <a target="_blank" href="https://github.com/ttimong">
                      <FaGithub style={styles.smicon} />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/tim-ong/"
                    >
                      <FaLinkedin style={styles.smicon} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="ContactUs">
      <h2>CONTACT</h2>
      <h4>Find out how we can help you today! </h4>
      <p style={styles.centeralign}>
        Email:{" "}
        <a
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "700"
          }}
          href="mailto:info@uptick.com"
        >
          info@uptick.com{" "}
        </a>
      </p>
      <p style={styles.centeralign}> Phone: +65 9899 0206 </p>
      <p style={styles.centeralign}>
        <em>Ask for our case studies</em>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      style={{
        marginTop: "200px",
        marginLeft: "3%"
      }}
    >
      <h6>
        Designed and developed by Dominic. Icons by freepix from Flaticon.
        <br />
        UpTick (c) 2019. All rights reserved.
      </h6>
    </div>
  );
};

const Main = () => (
  <div>
    <Navigation />
    <Banner />
    <ColoredLine color="rgb(59 59 59)" />
    <Expertise />
    <ColoredLine color="rgb(59 59 59)" />
    <DSCourse />
    <ColoredLine color="rgb(59 59 59)" />
    <Team />
    <TeamMembers />
    <ColoredLine color="rgb(59 59 59)" />
    <Contact />
    <Footer />
  </div>
);

export default Main;
