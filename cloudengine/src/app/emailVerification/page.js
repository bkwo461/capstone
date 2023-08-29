import SignUpContainer from "./sign-up-container";
import styles from "./index.module.css";


const EmailVerification = () => {

  return (
    <div className={styles.emailVerification}>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <SignUpContainer />
      <div className={styles.nextBtn}>
        <div className={styles.nextIcon}>
          <div className={styles.next}>Next</div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.loginToYourAccountWrapper}>
          <div className={styles.loginToYour}>Login to your account</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.verificationCode}>Verification Code</div>
          <img
            className={styles.interfaceEssentialemai1Icon}
            alt=""
            src="/interface-essentialemai1.svg"
          />
        </div>
        <div className={styles.pleaseFillThe}>
          Please fill the verification code sent to your email
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

export default EmailVerification;
