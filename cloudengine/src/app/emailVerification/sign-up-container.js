import styles from "./sign-up-container.module.css";
const SignUpContainer = () => {
  return (
    <div className={styles.maskGroupParent}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group1.svg" />
      <div className={styles.signUp}>Sign Up</div>
    </div>
  );
};

export default SignUpContainer;
