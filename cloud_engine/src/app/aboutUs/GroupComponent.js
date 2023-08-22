import { useMemo } from "react";
import styles from "./GroupComponent.module.css";
const GroupComponent = ({
  imageDescription,
  imageDimensions,
  groupDivPosition,
  rectangleDivBackgroundColor,
  fillInTheLetterSpacing,
  fillInTheFontFamily,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      position: groupDivPosition,
    };
  }, [groupDivPosition]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const fillInTheStyle = useMemo(() => {
    return {
      letterSpacing: fillInTheLetterSpacing,
      fontFamily: fillInTheFontFamily,
    };
  }, [fillInTheLetterSpacing, fillInTheFontFamily]);

  return (
    <div className={styles.cardItemParent} style={groupDivStyle}>
      <div className={styles.cardItem}>
        <div className={styles.generalTaxpayersAgency}>
          (1) General taxpayer's agency accounting process.
        </div>
        <div className={styles.icon}>
          <div className={styles.iconChild} style={rectangleDivStyle} />
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <img className={styles.icon1} alt="" src={imageDescription} />
        <img className={styles.icon1} alt="" src={imageDimensions} />
      </div>
      <div className={styles.cardItem1}>
        <div
          className={styles.fillInThe}
          style={fillInTheStyle}
        >{`Fill in the remember voucher based on the original voucher. 2. Summarize and compile subject summary table according to accounting vouchers. 3. Register the general ledger according to the account summary table. `}</div>
      </div>
    </div>
  );
};

export default GroupComponent;
