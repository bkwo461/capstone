import AddressContainer from "./address-container";
import styles from "./index.module.css";

const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.groupParent}>
        <AddressContainer
          adress="Adress"
          interfaceEssentialLocatio="/interface-essentiallocation.svg"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.iconlyboldprofile} />
          <div className={styles.firstNameWrapper}>
            <div className={styles.firstName}>First Name</div>
          </div>
          <img
            className={styles.iconfeatherIcon}
            alt=""
            src="/iconfeather-icon.svg"
          />
        </div>
        <AddressContainer
          adress="E-mail"
          interfaceEssentialLocatio="/iconfeather-icon1.svg"
          frameDivTop="544.43px"
          propOverflow="hidden"
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.surnameWrapper}>
            <div className={styles.firstName}>Surname</div>
          </div>
          <img
            className={styles.iconfeatherIcon1}
            alt=""
            src="/iconfeather-icon.svg"
          />
        </div>
      </div>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
        <img className={styles.maskGroupIcon1} alt="" src="/mask-group1.svg" />
        <div className={styles.signUp}>Sign Up</div>
      </div>
      <div className={styles.pleaseFillYourInformationBWrapper}>
        <div className={styles.firstName}>
          Please fill your information below
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupInner} />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.loginToYourAccountWrapper}>
          <div className={styles.loginToYour}>Login to your account</div>
        </div>
      </div>
      <div className={styles.nextBtn}>
        <div className={styles.nextIcon}>
          <div className={styles.next}>Next</div>
        </div>
      </div>
      <img
        className={styles.xnixlinecrossIcon}
        alt=""
        src="/xnixlinecross.svg"
      />
    </div>
  );
};

export default Register;
