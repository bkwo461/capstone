import { useMemo } from "react";
import styles from "./Component1.module.css";
const Component1 = ({
  numberLabel,
  featureDescription,
  accountantCost,
  component1Position,
  component1BorderRadius,
  component1Width,
  component1AlignSelf,
}) => {
  const component1Style = useMemo(() => {
    return {
      position: component1Position,
      borderRadius: component1BorderRadius,
      width: component1Width,
      alignSelf: component1AlignSelf,
    };
  }, [
    component1Position,
    component1BorderRadius,
    component1Width,
    component1AlignSelf,
  ]);

  return (
    <div className={styles.component1} style={component1Style}>
      <div className={styles.iconParent}>
        <div className={styles.icon}>
          <div className={styles.iconChild} />
          <div className={styles.div}>{numberLabel}</div>
        </div>
        <div className={styles.h5}>{featureDescription}</div>
      </div>
      <div className={styles.h51}>{accountantCost}</div>
    </div>
  );
};

export default Component1;
