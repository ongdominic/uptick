import React from "react";
import Link from "gatsby-link";
import Images from "../images";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
  Timothy
} = Images;

const styles = {
  navi: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  emphasis: {
    fontSize: "21px",
    fontWeight: "500"
  },
  one: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "1170px"
  },
  two: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "970px",
    alignItems: "center"
  },
  three: {
    flex: 1,
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "center"
  },
  four: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "970px"
  },

  five: {
    flex: 1,
    textAlign: "center",
    maxWidth: "470px",
    marginRight: "30px"
  },
  studypic: {
    flex: 1,
    maxWidth: "470px"
  },
  centeralign: {
    textAlign: "center",
    color: "white"
  },
  icon: {
    maxWidth: "60%"
  },
  smicon: {
    fontSize: "30px",
    color: "grey",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px"
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
    fontWeight: "500",
    borderRadius: "30px",
    fontFamily: "Montserrat",
    marginTop: "20px"
  }
};

const MyOwnButton = props => {
  const { text = "Button", style = {} } = props;
  return (
    <button
      style={{
        ...buttonStyles.default,
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
    <div style={styles.navi}>
      <div style={{ flex: 1 }}>
        <img
          style={{ maxWidth: "100px", marginLeft: "55px" }}
          src={Logo}
          alt=""
        />
      </div>
      <div style={{ flex: 1 }}>
        <div style={styles.navi}>
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
          <a target="_blank" href="https://www.medium.com" class="navi">
            <h4>BLOG</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <img
        style={{
          flex: 1,
          maxWidth: "100%",
          minWidth: " 100%",
          maxHeight: "700px"
        }}
        src={Heroimage}
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: "270px",
          left: "65%",
          width: "470px",
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
    </div>
  );
};

const Expertise = () => {
  return (
    <div id="Expertise">
      <h2>EXPERTISE</h2>
      <div style={styles.one}>
        <div style={styles.three}>
          <img style={styles.icon} src={Learning} alt="" />
          <h5>Learning</h5>
          <p>
            New to Data Science? Not to worry, join our Intro to Data Science
            course to{" "}
            <span
              style={{
                fontWeight: "bold"
              }}
            >
              learn more{""}
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
            selling well? Fret not, we can assist you to answer these questions.
          </p>
        </div>
        <div style={styles.three}>
          <img style={styles.icon} src={Modeling} alt="" />
          <h5>Modeling</h5>
          <p>
            Providing simple yet elegant models to solve your needs is what we
            thrive for.
          </p>
        </div>
      </div>
    </div>
  );
};

const DSCourse = () => {
  return (
    <div id="DS">
      <h2>DATA SCIENCE COURSE</h2>
      <div style={styles.two}>
        <div style={styles.five}>
          <p>
            We are currently still backdating and creating lesson slides for our
            course. We hope to have it completed by end of February 2019, and
            translate it into an actual online course on udemy sometime in April
            2019.
          </p>
          <p>
            As of now, we are teaching every Saturday from 1030 - 1330 at 39
            Robinson Road, Level 9. Do reach out if you are interested; at the
            moment, we are at part 8.
          </p>
          <a target="_blank" href="https://www.google.com">
            <MyOwnButton text="Read more" style={{}} />
          </a>
        </div>
        <div>
          <img style={styles.studypic} src={Course} alt="" />
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div id="Team">
      <h2>TEAM</h2>
      <div style={styles.two}>
        <div
          style={{
            flex: 2,
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
            <span style={styles.emphasis}>data science for SME/start ups </span>
            that might not have considered it or have little funding but still
            wish to leverage from data science.
          </p>
          <p>
            {" "}
            We are currently creating an{" "}
            <span style={styles.emphasis}>online data science course</span>,
            that focuses on the mathematical foundation in hope to bridge the
            gap of understanding the underlying components of (ML) models.{" "}
          </p>
          <p>
            {" "}
            We hope to educate the public (or clients) with our{" "}
            <span style={styles.emphasis}>blog</span>, of what data science can
            solve and make it relatable with our daily problems and musings.
          </p>
        </div>
        <div style={{ flex: 1 }}>
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
  );
};

const TeamMembers = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "970px"
        }}
      >
        <h5>Team members</h5>
      </div>
      <div style={styles.four}>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            marginRight: "100px"
          }}
        >
          <img style={{ maxWidth: "240px" }} src={Shuming} alt="" />
          <h5>Peh Shu Ming</h5>
          <p
            style={{
              maxWidth: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            I am a Data Scientist at Skyscanner, overlooking its non-flight
            verticals, and currently working on predictive models for user
            behavior and SEO ranking. For more information, check out my{" "}
            <span>
              {" "}
              <a style={{ color: "white" }} href="">
                personal website
              </a>
            </span>
            .
          </p>
          <a href="">
            <FaGithub style={styles.smicon} />
          </a>
          <a href="">
            <FaLinkedin style={styles.smicon} />
          </a>
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center"
          }}
        >
          <img style={{ maxWidth: "240px" }} src={Timothy} alt="" />
          <h5>Timothy Ong</h5>
          <p
            style={{
              maxWidth: "80%",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            {" "}
            I am currently a Data Analyst at Shopee, an e-commerce company. I am
            experienced in building and maintaining data pipelines, data
            reporting, and data visualizations. Being passionate in data
            analytics, I have decided to help businesses and individuals make
            better decisions with data.
          </p>
          <a href="">
            <FaGithub style={styles.smicon} />
          </a>
          <a href="">
            <FaLinkedin style={styles.smicon} />
          </a>
        </div>
      </div>
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
            color: "white"
          }}
          href="mailto:info@uptick.com"
        >
          info@uptick.com{" "}
        </a>
      </p>
      <p style={styles.centeralign}> Phone: +65 1234 5678 </p>
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
        marginLeft: "15%"
      }}
    >
      <h6>
        Designed and developed by Dominic. Icons by freepix from Flaticon.{" "}
        <br />
        UpTick (c) 2019. All rights reserved.
      </h6>
    </div>
  );
};

const Main = () => (
  <div>
    {/* <NewNav /> */}
    <Navigation />
    <Banner />
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
