import GroupComponent from "./GroupComponent";
import styles from "./ContainerAboutUs3.module.css";
const ContainerAboutUs3 = () => {
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
      <div className={styles.h2Parent}>
        <b className={styles.h2}>Questions About Us</b>
        <div className={styles.shortIntroduction}>short introduction</div>
      </div>
    </div>
  );
};

export default ContainerAboutUs3;
