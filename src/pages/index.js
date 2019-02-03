import React from "react";
import Images from "../images";

const {
  Logo,
  Heroimage,
  Learning,
  Infrastructure,
  Analytics,
  Modeling,
  Course,
  Fulllogo
} = Images;

// const Logo = Images.Logo;

const styles = {
  one: {
    display: "flex",
    flexDirection: "row",
    alightItem: "center"
  },
  two: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "1280px",
    position: "center"
  },
  three: {
    flex: 1,
    paddingLeft: "90px",
    paddingRight: "50px"
  },
  four: {
    flex: 1,
    paddingRight: "50px"
  },
  five: {
    flex: 1,
    minWidth: "50%"
  },
  studypic: {
    maxWidth: "400px"
  },
  centeralign: {
    textAlign: "center"
  },
  icon: {
    maxWidth: "60%",
    align: "center"
  }
};

const buttonStyles = {
  default: {
    background: "#F2F2F2",
    height: "50px",
    width: "200px",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "30px"
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
    <div style={styles.one}>
      <div style={{ flex: 1 }}>
        <img style={{ maxWidth: "100px" }} src={Logo} alt="" />
      </div>
      <div style={{ flex: 1 }}>
        <h4>EXPERTISE</h4>
      </div>
      <div style={{ flex: 1 }}>
        <h4>DATA SCIENCE COURSE</h4>
      </div>
      <div style={{ flex: 1 }}>
        <h4>TEAM</h4>
      </div>
      <div style={{ flex: 1 }}>
        <h4>CONTACT</h4>
      </div>
      <div style={{ flex: 1 }}>
        <h4>BLOG</h4>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div>
      <img
        style={{
          maxWidth: "100%"
        }}
        src={Heroimage}
        alt=""
      />
      <h1>UpTick</h1>
      <h3>
        We love data and the work we do. We work closely with our clients to
        deliver the best possible solutions for their needs.
      </h3>
      <MyOwnButton text="Contact us today" style={{}} />
    </div>
  );
};

const Expertise = () => {
  return (
    <div style={styles.two}>
      <div style={styles.three}>
        <img style={styles.icon} src={Learning} alt="" />
        <h5>Learning</h5>
        <p>
          New to Data Science? Not to worry, join our Intro to Data Science
          course to <strong>learn more</strong>.
        </p>
      </div>
      <div style={styles.four}>
        <img style={styles.icon} src={Infrastructure} alt="" />
        <h5>Infrastructure</h5>
        <p>
          Half the battle is won with a robust and structured data
          infrastructure. We can help you to achieve it.
        </p>
      </div>
      <div style={styles.four}>
        <img style={styles.icon} src={Analytics} alt="" />
        <h5>Analytics</h5>
        <p>
          How can I improve my conversion rate? Why are my products not selling
          well? Fret not, we can assist you to answer these questions.
        </p>
      </div>
      <div style={styles.four}>
        <img style={styles.icon} src={Modeling} alt="" />
        <h5>Modeling</h5>
        <p>
          Providing simple yet elegant models to solve your needs is what we
          thrive for.
        </p>
      </div>
    </div>
  );
};

const DSCourse = () => {
  return (
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
        <MyOwnButton text="Read more" style={{}} />
      </div>
      <div>
        <img style={styles.studypic} src={Course} alt="" />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h4>Find out how we can help you today! </h4>
      <p style={styles.centeralign}>Email: info@uptick.com </p>
      <p style={styles.centeralign}> Phone: +65 1234 5678 </p>
      <p style={styles.centeralign}>
        <em>Ask for our case studies</em>
      </p>
    </div>
  );
};

const Main = () => (
  <div>
    <Navigation />

    <Banner />

    <h2>EXPERTISE</h2>

    <Expertise />

    <h2>DATA SCIENCE COURSE</h2>

    <DSCourse />

    <h2>TEAM</h2>

    <h2>CONTACT</h2>

    <Contact />
  </div>
);

export default Main;
