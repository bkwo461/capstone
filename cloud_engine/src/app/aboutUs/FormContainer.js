import styles from "./FormContainer.module.css";
const FormContainer = ({ iconImageUrl, ctaText }) => {
  return (
    <div className={styles.colMd3}>
      <div className={styles.cardItem}>
        <img className={styles.icnSettingsIcnLg} alt="" src={iconImageUrl} />
        <div className={styles.h5}>{ctaText}</div>
      </div>
    </div>
  );
};

export default FormContainer;
