'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./index.module.css";


const EmailVerification = () => {

  const router = useRouter();

    const SetIDPW = () => {
        router.push('/setIdPw');
    };
    const Home = () => {
      router.push('/');
  };

  return (
    <div className={styles.emailVerification}>
      <div className={styles.bgParent}>
        <div className={styles.bg} />
        <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
      </div>
      <div className={styles.maskGroupParent}>
      <img className={styles.maskGroupIcon} alt="" src="/mask-group.svg" />
      <img className={styles.maskGroupIcon1} alt="" src="/mask-group1.svg" />
      <div className={styles.signUp}>Sign Up</div>
    </div>
      <div className={styles.nextBtn}>
        <div className={styles.nextIcon}>
          <div className={styles.next} onClick={SetIDPW}>Next</div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.loginToYourAccountWrapper}>
          <div className={styles.loginToYour}>Login to your account</div>
        </div>
      </div>
      <div className={styles.pleaseFillTheVerificationCWrapper}>
        <div className={styles.pleaseFillThe}>
          Please fill the verification code sent to your email
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.verificationCode}>Verification Code</div>
        <img
          className={styles.interfaceEssentialemai1Icon}
          alt=""
          src="/interface-essentialemai1.svg"
        />
      </div>
      <div>
      <img
        className={styles.xnixlinecrossIcon}
        onClick={Home}
        alt=""
        src="/xnixlinecross.svg"
      />
      </div>
    </div>
  );
};

export default EmailVerification;
