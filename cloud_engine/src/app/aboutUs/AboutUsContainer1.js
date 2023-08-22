import Component1 from "./Component1";
import styles from "./AboutUsContainer1.module.css";
const AboutUsContainer1 = () => {
  return (
    <div className={styles.aboutUs4}>
      <div className={styles.maskGroup} />
      <div className={styles.background}>
        <img className={styles.coverIcon} alt="" src="/cover@2x.png" />
        <div className={styles.filter} />
      </div>
      <div className={styles.coverParent}>
        <img className={styles.coverIcon1} alt="" src="/cover1@2x.png" />
        <div className={styles.component1Parent}>
          <Component1
            numberLabel="1"
            featureDescription="Ultra low cost"
            accountantCost="Only hire a full-time accountant to undertake about 9%"
            component1Position="unset"
            component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) var(--br-9xs)"
            component1Width="unset"
            component1AlignSelf="stretch"
          />
          <Component1
            numberLabel="2"
            featureDescription="quality assurance"
            accountantCost="Only hire a full-time accountant to undertake about 9%"
            component1Position="unset"
            component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) 4px"
            component1Width="unset"
            component1AlignSelf="stretch"
          />
          <Component1
            numberLabel="3"
            featureDescription="Ultra low cost"
            accountantCost="Only hire a full-time accountant to undertake about 9%"
            component1Position="unset"
            component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) 4px"
            component1Width="unset"
            component1AlignSelf="stretch"
          />
          <Component1
            numberLabel="4"
            featureDescription="quality assurance"
            accountantCost="Only hire a full-time accountant to undertake about 9%"
            component1Position="unset"
            component1BorderRadius="var(--br-9xs) var(--br-9xs) var(--br-base) var(--br-base)"
            component1Width="unset"
            component1AlignSelf="stretch"
          />
        </div>
      </div>
      <b className={styles.h2}>properties</b>
    </div>
  );
};

export default AboutUsContainer1;
