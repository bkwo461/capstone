import styles from "./FormContainer1.module.css";
const FormContainer1 = () => {
  return (
    <div className={styles.aboutUsFooter}>
      <img className={styles.aboutUsFooterChild} alt="" src="/line-145.svg" />
      <div className={styles.copyright2020}>
        Copyright © 2020 Company Name All rights reserved
      </div>
      <div className={styles.aboutUsFooterInner}>
        <div className={styles.parent}>
          <div className={styles.div}>+1-234-567-890</div>
          <div className={styles.div}>
            <p className={styles.rockefellerPlazanewYork}>
              Rockefeller PlazaNew York, NY 10112
            </p>
          </div>
        </div>
      </div>
      <div className={styles.termOfUseParent}>
        <div className={styles.div}>Term of Use</div>
        <div className={styles.div}>Privacy Police</div>
        <div className={styles.div}>Cardholder Agreement</div>
      </div>
      <div className={styles.downloadsParent}>
        <div className={styles.downloads}>Downloads</div>
        <img className={styles.frameChild} alt="" src="/group-1095.svg" />
        <img className={styles.frameChild} alt="" src="/group-1096.svg" />
      </div>
      <div className={styles.socialParent}>
        <div className={styles.downloads}>Social</div>
        <div className={styles.facebookParent}>
          <div className={styles.div}>Facebook</div>
          <div className={styles.div}>Instagram</div>
          <div className={styles.div}>Twitter</div>
          <div className={styles.div}>Pinterest</div>
          <div className={styles.div}>Linkedin</div>
        </div>
      </div>
      <div className={styles.learnMoreParent}>
        <div className={styles.downloads}>Learn More</div>
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
  );
};

export default FormContainer1;
