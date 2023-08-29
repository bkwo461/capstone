import SignUpContainer from "./sign-up-container";
import Form from "./form";
import styles from "./index.module.css";


const RegisterIDPW = () => {
  return (
    <div className={styles.registerIdPw}>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <SignUpContainer />
      <div className={styles.nextBtn}>
        <div className={styles.nextIcon}>
          <div className={styles.next}>
            <div className={styles.next1}>Next</div>
          </div>
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
        <Form />
        <div className={styles.pleaseFillYour}>
          Please fill your information below
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

export default RegisterIDPW;
