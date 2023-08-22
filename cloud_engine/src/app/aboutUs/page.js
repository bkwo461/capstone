import FormContainer1 from "./FormContainer1";
import Profiles from "./Profiles";
import AboutUsContainer1 from "./AboutUsContainer1";
import ContainerAboutUs3 from "./ContainerAboutUs3";
import AboutUsContainer from "./AboutUsContainer";
import TopNav from "./NavBarAboutUs";
import styles from "./index.module.css";
const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <FormContainer1 />
      <div className={styles.aboutUsChild} />
      <Profiles />
      <b className={styles.meetOurTeamContainer}>
        <span>{`Meet Our `}</span>
        <span className={styles.team}>Team</span>
      </b>
      <AboutUsContainer1 />
      <ContainerAboutUs3 />
      <AboutUsContainer />
      <div className={styles.aboutUs1}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <div className={styles.bg} />
        <b className={styles.h2}>
          <p className={styles.yourStrategyIs}>Your strategy is only</p>
          <p className={styles.yourStrategyIs}>{`as good as `}</p>
          <p className={styles.yourStrategyIs}>
            <span>you execute it</span>
            <span className={styles.span}>.</span>
          </p>
        </b>
        <img
          className={styles.headerImageIcon}
          alt=""
          src="/header-image@2x.png"
        />
      </div>
      <TopNav />
    </div>
  );
};

export default AboutUs;
