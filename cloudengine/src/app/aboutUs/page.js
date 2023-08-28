import ContactInfoCard from "./contact-info-card";
import ApplyNowForm from "./apply-now-form";
import AboutUsContainer from "./about-us-container";
import AboutUsCardForm from "./about-us-card-form";
import AboutUsContainer1 from "./about-us-container1";
import RegisterForm from "./register-form";
import styles from "./index.module.css";


const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <ContactInfoCard />
      <ApplyNowForm />
      <AboutUsContainer />
      <AboutUsCardForm />
      <AboutUsContainer1 />
      <div className={styles.aboutUs1}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <div className={styles.bg} />
        <div className={styles.h2}>
          <p className={styles.yourStrategyIs}>Your strategy is only</p>
          <p className={styles.yourStrategyIs}>{`as good as `}</p>
          <p className={styles.yourStrategyIs}>you execute it.</p>
        </div>
        <img
          className={styles.headerImageIcon}
          alt=""
          src="/header-image@2x.png"
        />
      </div>
      <RegisterForm />
      <b className={styles.homeAboutContainer}>
        <span>{`Home     `}</span>
        <span className={styles.span}>{`»     `}</span>
        <span className={styles.aboutUs2}>{`About Us `}</span>
      </b>
    </div>
  );
};

export default AboutUs;
