import GroupComponent from "./group-component";
import styles from "./about-us-card-form.module.css";
const AboutUsCardForm = () => {
  return (
    <div className={styles.aboutUs3}>
      <div className={styles.instanceParent}>
        <GroupComponent
          imageDescription="/icon2.svg"
          imageDimensions="/icon3.svg"
          groupDivPosition="unset"
          rectangleDivBackgroundColor="#1056c6"
          fillInTheLetterSpacing="unset"
          fillInTheFontFamily="Roboto"
        />
        <GroupComponent
          imageDescription="/icon2.svg"
          imageDimensions="/icon3.svg"
          groupDivPosition="unset"
          rectangleDivBackgroundColor="#1056c6"
          fillInTheLetterSpacing="unset"
          fillInTheFontFamily="Roboto"
        />
        <GroupComponent
          imageDescription="/icon2.svg"
          imageDimensions="/icon3.svg"
          groupDivPosition="unset"
          rectangleDivBackgroundColor="#1056c6"
          fillInTheLetterSpacing="unset"
          fillInTheFontFamily="Roboto"
        />
      </div>
      <b className={styles.h2}>Questions About Us</b>
    </div>
  );
};

export default AboutUsCardForm;
