import styles from "./register-form.module.css";
const RegisterForm = () => {
  return (
    <div className={styles.topNavBar}>
      <div className={styles.topNavMenu}>
        <div className={styles.home}>Home</div>
        <b className={styles.aboutUs}>About Us</b>
        <div className={styles.myAccount}>My Account</div>
        <div className={styles.services}>Services</div>
      </div>
      <div className={styles.loginButton}>
        <div className={styles.text}>Log in</div>
        <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
      </div>
      <div className={styles.registerBtn}>
        <div className={styles.text}>Register</div>
        <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
      </div>
      <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
    </div>
  );
};

export default RegisterForm;
