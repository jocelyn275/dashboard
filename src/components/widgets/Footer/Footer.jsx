import React from "react";
import { Grid } from "@material-ui/core";
import { Container } from "react-bootstrap";
import FIcon from "../../assets/f_icon.png";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#333e47" }} className="footer">
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={8} md={8}>
            <div className="footer-slogan">
              Better visuals, better stories, better place
              <span style={{ color: "#ea4c6e" }}>.</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div className="footer-slogan__body">
              <div className="footer-slogan-two">
                The number 1<br></br> visual technology choice for<br></br>
                ambitious estate agents
              </div>
              <img src={FIcon} className="f-icon" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="footer-social-links">
              <ul className="footer_contact--social">
                <li className="sm-link">
                  <FaLinkedin />
                </li>
                <li className="sm-link">
                  <FaFacebook />
                </li>
                <li className="sm-link">
                  <FaTwitter />
                </li>
                <li className="sm-link">
                  <FaInstagram />
                </li>
              </ul>
              <ul className="footer_contact--details">
                <li>
                  <span className="social-link-span">T</span> 020 3598 9669
                </li>
                <li>
                  <span className="social-link-span">E</span>
                  hello@agent.com
                </li>
                <li>
                  <span className="social-link-span">W</span> agent.com
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="footer-number">020 3598 9669</div>
          </Grid>
          <Grid item xs={12} md={12}>
            <div className="footer-address">
              4th Floor, Stephenson House, Cherry Orchard Road, Croydon CR0 6BA
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
