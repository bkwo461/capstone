import { useMemo } from "react";
import styles from "./address-container.module.css";

const AddressContainer = ({
  adress,
  interfaceEssentialLocatio,
  frameDivTop,
  propOverflow,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const interfaceEssentialLocationIconStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className={styles.rectangleParent} style={groupDiv5Style}>
      <div className={styles.groupChild} />
      <div className={styles.adressWrapper}>
        <div className={styles.adress}>{adress}</div>
      </div>
      <img
        className={styles.interfaceEssentiallocationIcon}
        alt=""
        src={interfaceEssentialLocatio}
        style={interfaceEssentialLocationIconStyle}
      />
    </div>
  );
};

export default AddressContainer;
