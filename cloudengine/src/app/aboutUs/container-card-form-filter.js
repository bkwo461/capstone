import { useMemo } from "react";
import styles from "./container-card-form-filter.module.css";
const ContainerCardFormFilter = ({ dimensionCode, propTop, propHeight }) => {
  const aboutUs1Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div className={styles.aboutUs1} style={aboutUs1Style}>
      <img className={styles.maskGroupIcon} alt="" src={dimensionCode} />
      <div className={styles.bg} />
      <div className={styles.h2}>
        <p className={styles.yourStrategyIs}>Your strategy is only</p>
        <p className={styles.yourStrategyIs}>{`as good as `}</p>
        <p className={styles.yourStrategyIs}>you execute it.</p>
      </div>
      <img
        className={styles.headerImageIcon}
        alt=""
        src="/header-image@2x.png"
      />
    </div>
  );
};

export default ContainerCardFormFilter;
