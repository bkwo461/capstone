import { useMemo } from "react";
import styles from "./apply-now-form.module.css";
const ApplyNowForm = ({
  sNSkakaotalk,
  sNSkakaotalk1,
  sNSkakaotalk2,
  sNSkakaotalk3,
  aboutUs5Top,
}) => {
  const aboutUs5Style = useMemo(() => {
    return {
      top: aboutUs5Top,
    };
  }, [aboutUs5Top]);

  return (
    <div className={styles.aboutUs5} style={aboutUs5Style}>
      <div className={styles.aboutUs5Child} />
      <div className={styles.profiles}>
        <div className={styles.profilesChild} />
        <img className={styles.snskakaotalkIcon} alt="" src={sNSkakaotalk} />
        <div className={styles.snsinstagram}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/glyphlogo-may2016-1@2x.png"
          />
        </div>
        <div className={styles.snsfacebook}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/f-logo-rgbblack-114-1@2x.png"
          />
        </div>
        <div className={styles.profilesItem} />
        <div className={styles.snsinstagram1}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/glyphlogo-may2016-11@2x.png"
          />
        </div>
        <div className={styles.snsfacebook1}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/f-logo-rgbblack-114-11@2x.png"
          />
        </div>
        <div className={styles.profilesInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.profilesChild1} />
        <img className={styles.snskakaotalkIcon1} alt="" src={sNSkakaotalk1} />
        <img className={styles.rectangleIcon} alt="" src="/rectangle-216.svg" />
        <img
          className={styles.screenshot20230815At814}
          alt=""
          src="/screenshot-20230815-at-814-1@2x.png"
        />
        <img
          className={styles.screenshot20230815At813}
          alt=""
          src="/screenshot-20230815-at-813-1@2x.png"
        />
        <img
          className={styles.screenshot20230815At8141}
          alt=""
          src="/screenshot-20230815-at-814-2@2x.png"
        />
        <img
          className={styles.screenshot20230815At816}
          alt=""
          src="/screenshot-20230815-at-816-1@2x.png"
        />
        <img
          className={styles.screenshot20230815At815}
          alt=""
          src="/screenshot-20230815-at-815-1@2x.png"
        />
        <div className={styles.minsuKimLeadContainer}>
          <p className={styles.minsuKim}>
            <b>
              <span>Minsu Kim</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.leadBackendDeveloper}>Lead Backend Developer</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
        </div>
        <div className={styles.interestedInWorkingContainer}>
          <p className={styles.interestedInWorking}>
            Interested in working with us?
          </p>
          <p className={styles.blankLine2}>&nbsp;</p>
        </div>
        <div className={styles.snsinstagram2}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/glyphlogo-may2016-12@2x.png"
          />
        </div>
        <div className={styles.snsfacebook2}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/f-logo-rgbblack-114-12@2x.png"
          />
        </div>
        <img className={styles.snskakaotalkIcon2} alt="" src={sNSkakaotalk2} />
        <div className={styles.snsinstagram3}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/glyphlogo-may2016-13@2x.png"
          />
        </div>
        <div className={styles.snsfacebook3}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/f-logo-rgbblack-114-13@2x.png"
          />
        </div>
        <img className={styles.snskakaotalkIcon3} alt="" src={sNSkakaotalk3} />
        <div className={styles.snsinstagram4}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/glyphlogo-may2016-14@2x.png"
          />
        </div>
        <div className={styles.snsfacebook4}>
          <img
            className={styles.glyphLogoMay20161Icon}
            alt=""
            src="/f-logo-rgbblack-114-14@2x.png"
          />
        </div>
        <div className={styles.applyNow}>Apply Now</div>
        <img
          className={styles.noProfilePictureIcon181}
          alt=""
          src="/noprofilepictureicon18-1@2x.png"
        />
        <div className={styles.shinbeomKwonFrontendContainer}>
          <p className={styles.minsuKim}>
            <b>
              <span>Shinbeom Kwon</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.leadBackendDeveloper}>Frontend Developer</p>
          <p className={styles.leadBackendDeveloper}>Scrum Master</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
        </div>
        <div className={styles.sangjunMinLeadContainer}>
          <p className={styles.minsuKim}>
            <b>
              <span>Sangjun Min</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.leadBackendDeveloper}>Lead Frontend Developer</p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.blankLine8}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
        </div>
        <div className={styles.junheeHanBackendContainer}>
          <p className={styles.minsuKim}>
            <b>
              <span>Junhee Han</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.leadBackendDeveloper}>Backend Developer</p>
          <p className={styles.leadBackendDeveloper}>DevOps</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
        </div>
        <div className={styles.tanviKherFullContainer}>
          <p className={styles.minsuKim}>
            <b>
              <span>Tanvi Kher</span>
            </b>
          </p>
          <p className={styles.blankLine}>
            <b>
              <span>&nbsp;</span>
            </b>
          </p>
          <p className={styles.leadBackendDeveloper}>Full stack Developer</p>
          <p className={styles.leadBackendDeveloper}>Product Manager</p>
          <p className={styles.blankLine}>
            <b>&nbsp;</b>
          </p>
        </div>
      </div>
      <b className={styles.meetOurTeamContainer}>
        <span>{`Meet Our `}</span>
        <span className={styles.team}>Team</span>
      </b>
    </div>
  );
};

export default ApplyNowForm;
