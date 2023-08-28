import FormContainer from "./form-container";
import styles from "./about-us-container1.module.css";
const AboutUsContainer1 = () => {
  return (
    <div className={styles.aboutUs2}>
      <div className={styles.container}>
        <b className={styles.h2}>Dream big Do right.</b>
        <div className={styles.containerChild} />
        <div className={styles.containerInner}>
          <div className={styles.rowWrapper}>
            <div className={styles.row}>
              <FormContainer
                iconImageUrl="/icn-settings-icnlg.svg"
                ctaText="Are you new?"
              />
              <FormContainer
                iconImageUrl="/icn-settings-icnlg1.svg"
                ctaText="Contact us"
              />
              <FormContainer
                iconImageUrl="/icn-settings-icnlg2.svg"
                ctaText="Meet our Team"
              />
              <FormContainer
                iconImageUrl="/icn-settings-icnlg3.svg"
                ctaText="Our partners"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer1;
