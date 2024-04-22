import React from "react";
import styles from "./ContactInformation.module.css";
import { BsClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa6";
import youtubeImg from './IMG/youtubeImg.PNG'
import instagramImg from './IMG/instagramImg.PNG'
import Container from '@mui/material/Container';
function ContactInformation() {

  return (
    <React.Fragment>
      <Container className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.contactInfo}>
          <p><strong>OUR SERVICES</strong></p>
          <h1>Contact information</h1>
        </div>
        <div className={styles.itemContainer}>
            <div className={styles.timingContainer}>
              <div className={styles.iconContainer}>
                <BsClockFill className={styles.icon} />
              </div>
              <div className={styles.content}>
                <span className={styles.timeContent}>09:am to 6:00pm</span>
                <br />
                <span className={styles.day}>Sunday close</span>
              </div>
            </div>
            <div className={styles.locationContainer}>
              <div className={styles.iconContainer}>
                <MdLocationOn className={styles.icon} />
              </div>
              <div className={styles.LocationContent}>
                <div className={styles.content}>
                  <span className={styles.timeContent}>location location djnb dfnbk nfkbn kbnd </span>
                  <br />
                </div>
              </div>
            </div>
        </div>
        <div className={`${styles.itemContainer} ${styles.itemContainer1}`}>
          <div className={styles.timingContainer}>
            <div className={styles.iconContainer}>
              <BiSolidPhoneCall className={styles.icon} />
            </div>
            <div className={styles.content}>
              <span className={styles.timeContent}>+91 9632587410</span>
              <br />
              <span className="day">goodtechmind@gmail.com</span>
            </div>
          </div>
          <div>
          <div className={styles.socialLinkMainContainer}>
            <div className={styles.socialLinkContentContainer}>
              <h3>Our Social links</h3>
            </div>
            <div className={styles.socialLinkContainer}>
                <a href="" target="blank">
                  <FaFacebook className={styles.facebookIcon}/>
                </a>
                <a href="" target="blank">
                  <img className={styles.instagramImg} src={instagramImg} alt=""></img>
                </a>
                <a href="" target={styles.blank}>
                  <img className={styles.youtubeIcon} src={youtubeImg} alt=""></img>
                </a>
            </div>
          </div>
          </div>
        </div>
      </div>
      </Container>
    </React.Fragment>
  );
}
export default ContactInformation;
