import React,{useEffect} from 'react'
import styles from './Product.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function CounterSection() {
  useEffect(() => {
    AOS.init({duration:"1000"})
    return () => {  
    };
  }, []);
  return (
    <>
    <div className={styles.container}>
      <div className={styles.productContainer}>
          <div className={styles.productText} data-aos="fade-up-right">
            <h3 className={styles.productHeading}>Empowering businesses</h3>
            <div className={styles.productDescription}>
              <p className={styles.Description}>to thrive in the digital realm, one pixel-perfect webste at a time</p>
            </div>
          </div>
          <div className={styles.productImage} data-aos="fade-up-left">
            <img className={styles.productImg} src="https://st3.depositphotos.com/10638998/15140/i/450/depositphotos_151403040-stock-photo-business-team-celebrating-success.jpg" alt="" />
          </div>
        </div>
        <div className={styles.productLineContainer}>
          <div className={styles.line}></div>
            <h3 className={styles.name}>Products</h3>
          <div className={styles.line}></div>
        </div>
    </div>  
    </>
  )
}
export default CounterSection