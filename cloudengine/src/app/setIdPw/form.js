import styles from "./form.module.css";
const Form = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.reEnterPasswordWrapper}>
          <div className={styles.reEnterPassword}>Re-enter password</div>
        </div>
        <img
          className={styles.iconfeatherIcon}
          alt=""
          src="/iconfeather-icon.svg"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <div className={styles.iconlyboldprofile} />
        <div className={styles.idWrapper}>
          <div className={styles.id}>ID</div>
        </div>
        <img
          className={styles.iconfeatherIcon1}
          alt=""
          src="/iconfeather-icon1.svg"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild} />
        <div className={styles.passwordWrapper}>
          <div className={styles.password}>Password</div>
        </div>
        <img
          className={styles.interfaceEssentialkeyIcon}
          alt=""
          src="/interface-essentialkey.svg"
        />
      </div>
    </div>
  );
};

export default Form;
