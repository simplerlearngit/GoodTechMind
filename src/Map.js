import React from "react";
import styles from './Map.module.css'
import Container from "@mui/material/Container";
function Map() {
  return (
    <React.Fragment>
      <Container>
        <div className={styles.mapContainer} maxWidth="sm">
          <div className="map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113911.20573097582!2d80.94251274999999!3d26.848692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1712915904564!5m2!1sen!2sin"
                width="100%"
                height="600"/>
          </div>
          <div className={styles.mapFooterText}>
            <h1>DON'T HESIATE TO CONTACT WITH US</h1>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Map;
