import Header from "./header";
import ContainerCardFormFilter from "./container-card-form-filter";
import ContactInfoCard from "./contact-info-card";
import GroupComponent from "./group-component";
import Component1 from "./component1";
import ApplyNowForm from "./apply-now-form";
import styles from "./index.module.css";


const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <Header />
      <ContainerCardFormFilter dimensionCode="/mask-group.svg" />
      <ContactInfoCard
        aboutUsFooterTop="calc(50% + 2591.5px)"
        aboutUsFooterLeft="calc(50% - 963px)"
      />
      <div className={styles.aboutUs2}>
        <div className={styles.container}>
          <b className={styles.h2}>Dream big Do right.</b>
          <div className={styles.containerChild} />
          <div className={styles.containerInner}>
            <div className={styles.rowWrapper}>
              <div className={styles.row}>
                <div className={styles.colMd3}>
                  <div className={styles.cardItem}>
                    <img
                      className={styles.icnSettingsIcnLg}
                      alt=""
                      src="/icn-settings-icnlg.svg"
                    />
                    <div className={styles.h5}>Are you new?</div>
                  </div>
                </div>
                <div className={styles.colMd3}>
                  <div className={styles.cardItem}>
                    <img
                      className={styles.icnSettingsIcnLg}
                      alt=""
                      src="/icn-settings-icnlg1.svg"
                    />
                    <div className={styles.h5}>Contact us</div>
                  </div>
                </div>
                <div className={styles.colMd32}>
                  <div className={styles.cardItem}>
                    <img
                      className={styles.icnSettingsIcnLg}
                      alt=""
                      src="/icn-settings-icnlg2.svg"
                    />
                    <div className={styles.h5}>Meet our Team</div>
                  </div>
                </div>
                <div className={styles.colMd33}>
                  <div className={styles.cardItem}>
                    <img
                      className={styles.icnSettingsIcnLg}
                      alt=""
                      src="/icn-settings-icnlg3.svg"
                    />
                    <div className={styles.h5}>Our partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutUs6}>
        <div className={styles.instanceParent}>
          <GroupComponent
            group="/group.svg"
            imageDescription="/icon21.svg"
            imageDimensions="/icon31.svg"
            groupDivPosition="unset"
            rectangleDivBackgroundColor="#1056c6"
            fillInTheLetterSpacing="unset"
            fillInTheFontFamily="Roboto"
          />
          <GroupComponent
            group="/group.svg"
            imageDescription="/icon21.svg"
            imageDimensions="/icon31.svg"
            groupDivPosition="unset"
            rectangleDivBackgroundColor="#1056c6"
            fillInTheLetterSpacing="unset"
            fillInTheFontFamily="Roboto"
          />
          <GroupComponent
            group="/group.svg"
            imageDescription="/icon21.svg"
            imageDimensions="/icon31.svg"
            groupDivPosition="unset"
            rectangleDivBackgroundColor="#1056c6"
            fillInTheLetterSpacing="unset"
            fillInTheFontFamily="Roboto"
          />
        </div>
        <b className={styles.h21}>Questions About Us</b>
      </div>
      <div className={styles.aboutUs61}>
        <div className={styles.maskGroup} />
        <div className={styles.background}>
          <img className={styles.coverIcon} alt="" src="/cover1@2x.png" />
          <div className={styles.filter} />
        </div>
        <div className={styles.coverParent}>
          <img className={styles.coverIcon1} alt="" src="/cover11@2x.png" />
          <div className={styles.component1Parent}>
            <Component1
              prop="1"
              h5="Ultra low cost"
              h51="Only hire a full-time accountant to undertake about 9%"
              component1Position="unset"
              component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) var(--br-9xs)"
              component1Width="unset"
              component1AlignSelf="stretch"
            />
            <Component1
              prop="2"
              h5="quality assurance"
              h51="Only hire a full-time accountant to undertake about 9%"
              component1Position="unset"
              component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) 4px"
              component1Width="unset"
              component1AlignSelf="stretch"
            />
            <Component1
              prop="3"
              h5="Ultra low cost"
              h51="Only hire a full-time accountant to undertake about 9%"
              component1Position="unset"
              component1BorderRadius="var(--br-base) var(--br-base) var(--br-9xs) 4px"
              component1Width="unset"
              component1AlignSelf="stretch"
            />
            <Component1
              prop="4"
              h5="quality assurance"
              h51="Only hire a full-time accountant to undertake about 9%"
              component1Position="unset"
              component1BorderRadius="var(--br-9xs) var(--br-9xs) var(--br-base) var(--br-base)"
              component1Width="unset"
              component1AlignSelf="stretch"
            />
          </div>
        </div>
        <b className={styles.h22}>properties</b>
      </div>
      <ApplyNowForm
        sNSkakaotalk="/snskakaotalk.svg"
        sNSkakaotalk1="/snskakaotalk1.svg"
        sNSkakaotalk2="/snskakaotalk2.svg"
        sNSkakaotalk3="/snskakaotalk3.svg"
        aboutUs5Top="calc(50% + 1071.5px)"
      />
    </div>
  );
};

export default AboutUs;
