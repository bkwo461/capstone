import { useMemo } from "react";
import styles from "./contact-info-card.module.css";
const ContactInfoCard = ({ aboutUsFooterTop, aboutUsFooterLeft }) => {
  const aboutUsFooterStyle = useMemo(() => {
    return {
      top: aboutUsFooterTop,
      left: aboutUsFooterLeft,
    };
  }, [aboutUsFooterTop, aboutUsFooterLeft]);

  return (
    <div className={styles.aboutUsFooter} style={aboutUsFooterStyle}>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.copyright2020}>
          Copyright © 2020 Company Name All rights reserved
        </div>
        <div className={styles.footerInner}>
          <div className={styles.parent}>
            <div className={styles.div}>+64 9 373 7513</div>
            <div className={styles.theUniversityOf}>
              The University of Auckland, 34 Princes Street, Auckland CBD,
              Auckland 1010
            </div>
          </div>
        </div>
        <div className={styles.termOfUseParent}>
          <div className={styles.div}>Term of Use</div>
          <div className={styles.div}>Privacy Police</div>
          <div className={styles.div}>Cardholder Agreement</div>
        </div>
        <div className={styles.socialParent}>
          <div className={styles.social}>Social</div>
          <div className={styles.facebookParent}>
            <div className={styles.div}>Facebook</div>
            <div className={styles.div}>Instagram</div>
            <div className={styles.div}>Twitter</div>
            <div className={styles.div}>Pinterest</div>
            <div className={styles.div}>Linkedin</div>
          </div>
        </div>
        <div className={styles.learnMoreParent}>
          <div className={styles.social}>Learn More</div>
          <div className={styles.facebookParent}>
            <div className={styles.div}>How it work</div>
            <div className={styles.div}>Who we are</div>
            <div className={styles.div}>Careers</div>
            <div className={styles.div}>Blog</div>
            <div className={styles.div}>FAQs</div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
    </div>
  );
};

export default ContactInfoCard;
