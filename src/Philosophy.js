import React, { useEffect } from "react";
import styles from "./Philosophy.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import StateFadeMenu from "./StateFadeMenu";
import DepartmentFadeMenu from "./DepartmentFadeMenu";
function Philosophy() {
  useEffect(() => {
    AOS.init({ duration: "1000" });
    return () => {};
  }, []);
  return (
    <div>
      <div className={styles.MainContainer}>
        <div className={styles.imgFirstMainContainer}>
          <div className={styles.imgFirstLeftSideContainer}>
            <img
              className={styles.imgFirstLeftSide}
              src="https://media.gettyimages.com/id/1150528651/photo/successful-it-developer.jpg?s=612x612&w=gi&k=20&c=xGpKp4abqZfH5K8zv2eq3I_dZn6wAded3NxivuruHlA="
              alt=""
              data-aos="fade-right"
            />
            <img
              className={styles.imgSecondLeftSide}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEA8PEBAVDxAPFRUQFRUVFQ8VFRUQFhUWFxcVFRYYHSggGBooGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHSUtLS0vLS0tLS0rLS8tLS0tKy8tLSstLS0tLSsrLS0tLSstLS0rLS0tLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAAAQYCAwQFBwj/xABEEAABAwIEAwYDBgMGAwkAAAABAAIDBBEFEiExBkFRBxMiYXGRMoGhFEJiscHRI1LwM3KSosLhY3OCJTVDRFOTo7Px/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEjETQSJRYZEEMnH/2gAMAwEAAhEDEQA/AOvpoCEDQhCJCEIQCaSaAQhCAQgJIGkhCASTSQCAkmgaSaSASTSQCEIQCSapQCChCBJJpIEUk0kCSTSQJCEkGUmkmgaEk0AhCEAmkmiAkhCJCEIQCEkIBCEkAhIlWY6uNziwSMLxu0OaXD1G6DIQkhAIQhAIQhAFUqoqlAIQhAikmkgSSaSBFJMqlAISQgyU0k0DTVKaBoSQgaEJIGhJBRBpISRIuhCEAo1xJxQ2nPcxAPmO/Rn7lZ3EWKiniNj/ABHCzfLzUFwmgM0he74b3vuSfVY8vJrqNuLj33Wvr66Spzgvl7+5y3c4AjoNcvssOlkEYMkZdHOBoSSTmPxAe30ClOJYSYiZY25hzafzB5FaOiwmqeyZ4jcGi5Fzci+4v6XWEydPg3GA8cTwZY64CVpNhK0tzNH4gNHfLX1XRo5A4BzTma4BwI2IOoK4Q6N9Q58UkeWZoLm2D23A6gC1vVdA7Lsd7+A0slxJT6C/OPl7flZb8ef1XPyceu4nKEkLZgaEkIBJMpIBJNJAkFBSQJIppIEkmkgSEIQZKYVKYQVBCSEAndUoQVISQgd0kJFA0kJIGqJpQxrnONg0Ek+QVS0HF1ScjIGHxSnXyaOZ8v2VcsvGbTjN3TQVwfVSOkdcA7eTeQHn5rZ4fBlAa1uZ3QaAfsE4WZmtDNz4QfMbn81IsNomxMsBdx1J5krhxlyrvusYx6TDnHWQ38hsFsHRNa2wFgtTUV5vII5MkkZsWvsW3tcA8xcc1XhuL/aA4OjMT2aEGxafNrhoQtpqdKWZXv6R3i3Brj7RDpLELgXsCOmiifBGKyGvY97AzvSWutsTzU74omLIXkHkVAOB4HOkY883B4/6jcfQqm9LXuOyppBC7XAaEkIBJBSQNJCEAkmqUAUkJIEhCSAQhJBkBMJBNA0JIQNCSEDQki6BpFF0roGktXiXEVFSm09XDC7+V0jM3+G9/otHUdpuEs0+0uf/AHYpz9cqCYLn3FmLjvn2OoGQH8INtPU3PyVNV2v4c3MGMnlsPCcjGhzv5fE649SFFOGcQZi+KxxuiMUcxke5ubP4GtLi0EgbkdOapyY2zUX48pLupV2cMe59ZM97nNMpijBJs1rNDYcruLl0KnlA0Kj7qNlJ/Zi0YkffyzvJv7rOrIHSxlrHZHEfF/XyXPLqurW4x8e4egq5BIZHwSEZC6N+UvZvlcNnDe19rp8QxmjoiKVl5LtY3W5/Ebnc5QT6pQTRQsLiwsczQyXMmU9JL+Jo9dLHdaqo4uhnkhi1HdOL5HC3d3DSPCb6g33VtxPjev05rxFiwneyOJ9SHSHI4Pe8Nv8AeGUj8tNVOuG6UNMAAsbMHsbLCeyLFK7vIwDDTCwcNnPJBcfPYKT4VT2nH/DB/wBvzWXvKSJy6xtSe6FbDlUCu5wKwgpAoQIoQkgaSEIBK6EkCQhJAJISugEJXTQX0XSTQO6EkIHdCSEDQkhAXXE+13iqd1Y6hjkdHDThoeGkjPM5of4iNwA5oA2vfyt2y68s47Jnqqo97395ZCJf/UGc2f8AMWPTpopiGFz+qRSJ2QpFturiemnzU87GP+94P+XN/wDWVBI+fqVPexQf9rR+UMx+gH6oO5YlCC6Rjtna/I/73WqwTEA1zqaQ2e34CfvN/dbvHIzlEg3HhPoTp9fzXPOL8OnLe9aCCNiL3v5W5rhz/HN38X5YNpx1UGGN02cNFsuZrnsfryaWkE68lzjCsLnxC7I2GCmvd2+aQ9ZHc+tvzUnl4NqyKYVcplNszgTex5j5Xt8lLKOhZGwRMAawaOP8x5j05KLdXSbdyFwzg0dHEI2+pPXms+ib4nv5uP0Wsx7GmU8Ekl9rN+Z6f10XI+BeK534u2R7jkrHGJzLmwBB7vTqCGi/Qla8WHe3Py5/TvzHq6CsKJ6yWFdDBfBTVsFVoBCSEAhBSugCUkFUoGkkglAJJEoJQCEroQZATSCaBpXSQgaEk0AhJRnjvi2PDICbh1TKCIYyCbuFrvdYizBfXXXYII1224y+KCmp4pix8r3Pkaxxa4whpAzW3aXE6HfL5Liy2WP41NXzvqZyDI8BvhBDWtaLBrQSbD9SVqnjRWQbnbeqTnKyx1yFXfX2QXIzfN5FTzsZkDMVaTr/AAJtBudG2A872XP4Rq4+ZCnvY0+2MU/4mTD/AOMn9EHdqQzSF5n8I1DWjYDoepVUWSUMe4DI3xnmBbXX2W0DQbhYktGPBGNGXzu5X6D03WeWG60xz1th4hVskyuYcwAOvQ3IIPQgrSytJBHIX9lsfsoYZLbPc6T0LiDb6BWWxf2g5g2+q4893OunDUwiA8dUjnUs++UAX8mh7Mzva/suUQSupqhkrdHQyNkFueVwdp5G31XpPEqBksUtM4D+NE4e92n2zNK814hGWuIOuQlhvoeoBHX4h8l18Xpzcnt6MwTE4qqGOeF2aOQXB572II5EEEEdQtvG5ce7IeIY2B9DIcrnvdNG47HwDM08gRkuOtz8+uRFXUZbSq1aaVWCgruki6SBlUppIFdIlUTStY1z3HK1oLiTsANSVxXijtHrJJ3GjkNPAAGtGWNziRu4kjS/RB2y6pJXnaTjnFj/AOekHo2Ef6Vjv4wxQ7183yc0fkEHpC6F5nk4kxB29dUf+9KPyKx3YvWHerqD6zzn/Ug9QWKFwnCeC8VqoY6hk8gbKMwzTSg2uQDvztf5oQd+RdUp3QNCV0IGi6EIE9wAJJsALknQADcled+0TiNuI1jpGaQxDuYvxMBJLz/eJPyspL2kdob5ftOH0zA2IEwSyknM8tdZ7WD7rbgtub3F9ly7Xy+qtEG4q25yHOPRY74nOzFoJDRmdYE2be1z0FyB80BA65urzeXqrFOFfYoF1mwt/XVS/soky4zQfidI33hk/ZQyE2JHXVSvs0dbGMOP/FI943hSPT7fiKbufotPxRNVRU5mo8rpYS15Y8aSRD423AuDbW410+Sp4Tx77fTtkc1rJQP4jGuLgDrsSAbXBGo3B30JeN1v6Tq62eIPDHkHS+3sFYi1kl+f11/RHFbbNjd5uBPSzHEfUBYWGz2lmafFYMN/Ikt/RcefWTpw7xZOLy5O4lPwhxhd6SgBv+cMHzXnfjNg+21ltu9zW/Ebn28RXojFqfvqaaK9i9rsp6PGrT6ggFec+MZi6smcBbPlcfUi9vqtuOseSNPZdy7M+LhWw9xM8fa4RbWwMsfJ4HMjZ1vI81wwPCrp6l8b2yRksewhzXNJBa4bEFbM3q1iuBct4F7TzUSspa4MZJIQ2OVoLWufsGPafhJ5EaX0sF1EKqVSEJIGkgrHr6tsET5XmzWAuPn0A87oIT2qY73UIpGHxzDM/wAo+Q+Z/JcdkapFxBWPqZpJn/E8k+g5AeQGi0sjFKJWC5itlqyXtVotRK1lUi4H4cNfVMjIPdM/iSnpGD8PqTp79Fo2RkkAC5K73wLw8KCla1wtNLaSU9HW0Z8hp6kqBIGMDQGtAa1oAAGwA0ACE0IHiFYyCKWeQ2ZE1z3ejRfTzXMH9qssjg2KER620aJb+l3tt7LqxAIsdQVhUfDlECHimjDxqHBoDgfUKmWfitjjtynirGa6PLI+sqI3SWcBG1rGAW2yiTT9VmcH9o7wYKafNNnkEZlefGA82boC7N4iNzoPRdXxHC4J22mjEwGweS8D5OK1FLhUEU7DFEyPKHHwtA5W5eqp835SaX8Ott0qJZWsa57jlawFzidg0C5J+QVSjvaI2Q4VX938Xckn/lggyD/BmWzJ57xCoE000o0bLJJKAd7PeXa+6xyVTsmrIBCvhsjY5BdzIpQA9oJAkDTmaCOdjrrsiha3Nd2tth+q2xeC22/qgjBjy+V1kR0cpYZBG4xtvmcGktb/AHiNB810zgDgsVsgqJWtdAw7G/jI5EAjw35c7G+m/aY6RrWCMABjRlDQAGgdA0WAHkAs8uSTqNJx79vIbhrp/RUo7OJLYrh7ukv+h4XoGp4UoJPjoqd9+Ziiv72WvoeAcNp5m1ENK2ORhzNIdJZrrWuG3sND0Vfl/hPxfymMbr6rn9bGcKxFk8YtQzn+KWtLmRXFjmt8AvkN+jR/LrMBEdv3V/Lpa1x08lpx8/jvrqtMJ4b33KjXGmMMEP8ADHeOZMyOwI+JwIBP4QT9FG+EeIGPdiEznDJHlaDzcGlzxYejm/Ny2nGvB4nilko5O4mtq037t1hbKR9w2FrjbouJYXictMZqeS7A54EjDp4mysL2+R8O/kFlcZl6U7weghWtkje0G7mSFvudPpZeeeLaN8Ur5nHPFM9wBH3SNmn5DQ+qmFDxR3tJU+LJM95e0NOuXvm2JttorMUMdRE6GQXa8W8weRHmDqp48dK55bc2ZJc6DRX7qQ1vA1WxrnxlkzWAus3MHkDowjU+QJUZ73QW5rVmyaKmklkZHE1z5HuDWtG5cToB5rqnBvFWJ0tQ2ir45Khtw03Dn1EQt8XhBMrdRe9zzudjFOzjA5KiU1YOWOjc12m75d2tHS1rk+g56dRocZexs1W+DwlzYy7L48g6npck29VlnyeN06OLg88bdpnFIHAOabtOxVaxG1OaJkkdntkyvGtvCSCbH0ufkskus7L11HUhJyS+1cuKz0agfaBimcilYfCzxP8AN/IfL9VL8XrxTwvlO4Fmjq47Bcvmu8uc43c4kk+Z3Wsc+d100NTTrWzxKUSwLSYzRSOY4RWDnaXNxYcz6qajGot9odJKWsNmN3Omw/dZLgr1Nh/csynVx1JWThuHvqZo4Yxd8jg0fufIb/JVXSzss4d7+Y1cjf4VOfDf7024/wAO/rZdeWFg2GspIIqeP4Yxa/NzvvOPmTcrMKJCEk0GZUzRRNzyOZG3bM4taLnlcqqika4ZmkOa7UEbEciEq2jZM3I9jXt3s4Aj680UEAjaI2gNazwgDQAcgAs+X1E8V7q9PsohxDj7KKRhc9jS8EAODiXAEXytbqeWyltQdFHKnAWVcolkvZnhAFgNdTra/RY4TfJGud1hWop+M55bdzQvlB+868DPnnOb/Kpe1ueMZ2gZ2+Jt8wFxqL8xvy1TpMKiitlYBbnufc6rIqGeEgc9Pkuty7v245jPZWxzi6ikcwEkhkniAHRpAzW9bqO1HZrizTZtL3o6sey3+ctK75TMDXXI5WWc0g/C73WXJyZY3rHcWw79150peyzGnm5p2Q9M80X5MLlvqbsqxIOjEroSwuaJMkj8wZmGYjMwXOW9vNdw15i/omHjnp6qs/yMPvr/AKv41Yo6COBgjhaGMbYNaBYAAAAX9Ar4B8lWCFS6Qf8A7YJbxzva0yyI6cr+ytnXy9QQm6W/P2H7/sseZgPxX+b3j8iFhlz4T/Xteb+146a8lbEgPwuyuH1+XNW5ZnNjfkHeODTlabm7uV3m+l1qwyqlt3tPDobg95JcHqC1osr4ZZZSWT+y8mM6pYviWR2tmuZ4rX0e06WH7ctFz3iXs9bidTJVR1LYBLlu0R57kC2a4eNwG+y6W3DvFnfHDmOtyHyH/MVZrsbpKY5Jnsa4WOVsbr25bXstMJZd1Xk5JnJji5rh/ZNJGxw+2NJc4G/dEbAix8ZuNVsIOA5YzpUMd/0uH6lb2r47pmA5IpJDrvlaP1P0UXq+0GoJtHDHGOpzPP6D6LaWVjZkkdJgE0f32H/F+yiXGHZoaiQTwOip3OuZQ4uDHO/nFhod79d1bfxRXSb1Dmg8mtjZ9Wi/1WOQZDmkeZHdXEuPuVPRqtlwVh78NiqIZZ6aVjiZc0Uj3Pa9oAALQ3UGxG99dirmLcaUkkJjM7AB90HLr1c3mtZJMI2uAIFxZROvhiFyRmPos88ZXRxZZYzp1bgriKmlpGwtnaZInPa0E6ubbN4fS6lMk0ZbTTPc0yNYC118oLiAHFuYjcX0K452fY5BStrYpWENkbnY4NzESBpBBA1AIy+Wi31LxA+rghgy5e51c++rhqALGxCzmG62y5JMZa3fEmImZ7YwfBH5g3ed9Robbe60xargCpcuqTUeZll5W1bLVakiBV1zlafLZFWor6C+oCmXZnw/3TXVkg8cl2R35R31d8yLeg81i4FhTquRoynur3c6xtl6A9SukNpg0BrRYNAAHIAbBRW2NU3SJQ5pG6oJVVzumqUIN5ZDQmm0JVYpc0dFS0K6QqG81EhRZJzdCq0KyGDkSyLKdF0VGVSpYtsc4bFXmz9QqcqWVVuMqZbF5uQ/1ZGQdFaypZFn8GH6X+Std3k0s7wJGxU8ZyWy5pXvG7ru8LWg6Wsb2KvuonfcqpGn0pyPbu1h1uAh7zLDNJTSOtmyd2WuI5uY9pF7cxY6Ij4fLiPtFTNM0fdBETSfxCIAn0vZT4EyXcGxKSWSohfklEBaO+jFmuc692FpJs9thext4htsrmH18tQM7Ye6iPwGQ+N4/myD4QeVzfyWXR4dFE0MiYI2M0DWjK0DfQDRat1BUQk9w5s8RNxHI+SNzL7hjwHAt6AjTrbadWJ3GVVmobqxkc34cxjNvIm4utRA2mxEzNfTujmgIZI2RoD2ki4s4EhwtroeavzNxGQ5WNipm/zvkdM75MDWj3ctnhGH9xGGl5keSXPebXe8m5cenLTlYBJai6qI1fAMZvklc3yc1rh9LFaSq7Ppxqwsf6Oc0+xBC6sQrOVXU7/bjk3DFTF8UD9OgDh/lKwZqM7Oc5h6at+hC7m2K6omoWPFnNa4dCAVPSZcnBKjC7jQ+Y3/AN1gVGFPta1/Q9Bsu61PC1I+94Gi/Nvh/Jaup4FgcCGPfHcW3uLKtxWnLZ9ON4fhcjQ4ZLX68yPf8lK8PpREwNG/PfdS9/BTwwNa9mj8+bK4OIsRkO4tz+SyYODm/wDiSk+TRb6qcZpHJyeU1EOkkAVcFFPL/ZxOcOtrD3K6HSYDTxatiF+p1PuVsBGBsFbbLSAUvCE79ZHtYOjbuPutxScIU7LFzTIfxG49tlKMqpIQ0xaaER2DRZo0sNrei2NljlqvwG4t0ULQnMWPJTdNFm2SsoW21hhd0QtjlQoT5MsqoIQiQVQEIRFVIQhSBW3t+qEIVTZFk0KVSsiyaECsrkQ3SQoTFwusFbakhEmQmAkhAnqgNumhSquWRZCFCxEIyJIQNzVaIQhFaRakWpIUoItSLUIQUlqcWh9U0IL9krIQoWFkIQg//9k="
              alt=""
              data-aos="fade-up-right"
            />
          </div>
          <div className={styles.text1Container}>
            <h1>Our philosophy</h1>
            <p className={styles.philosophyDiscriptio} data-aos="fade-up">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type .
            </p>
          </div>
          <div className={styles.imgThirdRightContainer}>
            <img
              className={styles.imgThirdRight}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkGQI7K_F-JS2Wf90lw8QPjzaw2cBLSDC7A&s"
              alt=""
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className={styles.imgSecondMainContainer}>
          <div className={styles.text2Container}>
            <h1>Your Next Chapter Begins Here. </h1>
            <p className={styles.philosophyDiscription} data-aos="fade-right">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type .
            </p>
          </div>
          <div className={styles.imgRightSideSecondContainer}>
            <img
              className={styles.imgFirstRightSide}
              src="https://www.shutterstock.com/shutterstock/photos/2179380689/display_1500/stock-photo-happy-young-asian-saleswoman-looking-at-camera-welcoming-client-smiling-woman-executive-manager-2179380689.jpg"
              alt=""
              data-aos="fade-right"
            />
            <img
              className={styles.imgSecondRightSide}
              src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
              alt=""
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className={styles.cardMainContainer}>
          <div className={styles.jobHeading}>
            <h1>Current opening jobs</h1>
          </div>
          <div className={styles.filterContainer}>
            <span>Filter by :</span>
            <StateFadeMenu />
            <DepartmentFadeMenu />
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card1} data-aos="fade-right">
              <img
                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/314467672/original/446a7406f9fba3d45cceb2034857eb67591596e3/be-your-mern-stack-developer-build-react-or-next-website.png"
                alt=""
              />
              <div class={styles.centered}>
                <strong>Mern stack Web Developer</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
            <div className={styles.card2} data-aos="fade-up">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEKjJpDX8bjW0Aw5NMLPWkMKL42zkCyZ6a6-bevF0mQ&s"
                alt=""
              />
              <div class={styles.centered}>
                <strong>UI / UX Designer</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
            <div className={styles.card3} data-aos="fade-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW_rr69Q6pxGqNJcatw-TfpI0L4b2JK-m_zYqV2ZvT_Q&s"
                alt=""
              />
              <div class={styles.centered}>
                <strong>Word Press Web Developer</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.card1} data-aos="fade-right">
              <img
                src="https://www.shutterstock.com/image-vector/concept-computer-programming-developing-software-260nw-2149658841.jpg"
                alt=""
              />
              <div class={styles.centered}>
                <strong>Pythoon developer</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
            <div className={styles.card2} data-aos="fade-up">
              <img
                src="https://www.digitalvidya.com/blog/wp-content/uploads/2017/06/seo-jobs.jpg"
                alt=""
              />
              <div class={styles.centered}>
                <strong>PHP Web Developert</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
            <div className={styles.card3} data-aos="fade-left">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nQ06me02PTVpWP6hvBSzxIfLCK_OWdLkZaEXSaspiA&s"
                alt=""
              />
              <div class={styles.centered}>
                <strong>SEO</strong>
              </div>
              <div className={styles.detailContainer}>
                <a href="">More details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
