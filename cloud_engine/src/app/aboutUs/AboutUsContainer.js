import FormContainer from "./FormContainer";
import styles from "./AboutUsContainer.module.css";
const AboutUsContainer = () => {
  return (
    <div className={styles.aboutUs2}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.row}>
            <b className={styles.h2}>
              <span>Dream big Do right</span>
              <span className={styles.span}>.</span>
            </b>
          </div>
        </div>
        <div className={styles.containerChild} />
        <div className={styles.containerInner}>
          <div className={styles.rowWrapper}>
            <div className={styles.row1}>
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

export default AboutUsContainer;
