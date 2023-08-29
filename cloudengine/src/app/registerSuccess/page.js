'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./index.module.css";


const WelcomeMsg = () => {

  const router = useRouter();

  const Home = () => {
    router.push('/');
  };

  return (
    <div className={styles.welcomeMsg}>
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
          <div className={styles.next}>
            <div className={styles.complete} onClick={Home}>Complete</div>
          </div>
        </div>
      </div>
      <img
        className={styles.welcomeMsgChild}
        alt=""
        src="/group-1000002573.svg"
      />
      <div className={styles.welcomeToCloud}>Welcome to Cloud Engine.</div>
      <div className={styles.thankYouFor}>Thank you for joining us.</div>
    </div>
  );
};

export default WelcomeMsg;
