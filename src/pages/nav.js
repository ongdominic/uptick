import React, { Component } from 'react';
import { FaBars } from "react-icons/fa";
import Link from "gatsby-link";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    onSelected: false
  };
  this.handleClick = this.handleClick.bind(this);
}
  handleClick() {
    this.setState(state => ({
      onSelected: !state.onSelected
    }));
  }
  render() {
    const styles = {
      menufalse:{
        display: "none"
      },
      menutrue:{
        display: "flex",
        flexDirection:"column",
        alignSelf:"flex-end",
        position:"absolute",
        right: "24px",
        background:"rgb(10, 10, 10)",
        zIndex:"1"
      },
      NaviItemmobile: { alignSelf: "flex-end", display:"initial",
        marginRight: "36px", fontSize:"24px" },
    }
    return (
      <div>
        {this.state.onSelected ? (
          <div>
            <div style={styles.menutrue}>
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
        ) : (
          <div style={
            this.state.onSelected === true ? 
              styles.menufalse : styles.menutrue
          }
            onClick={()=>{
              this.setState({
                onSelected: true
              })
            }}

          >
            <FaBars style= {styles.NaviItemmobile} />
          </div>
        )}
      </div>
    )
  }
}

export default NavBar;