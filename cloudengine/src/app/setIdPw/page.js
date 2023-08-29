'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./index.module.css";
import Form from './form'


const RegisterIDPW = () => {

  const router = useRouter();

  const RegisterSuccess = () => {
    router.push('/registerSuccess');
  };
  const Home = () => {
    router.push('/');
};

  return (
    <div className={styles.registerIdPw}>
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
            <div className={styles.next1} onClick={RegisterSuccess}>Next</div>
          </div>
        </div>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.groupChild} />
        <div className={styles.alreadyHaveAn}>Already have an account?</div>
        <div className={styles.loginToYourAccountWrapper}>
          <div className={styles.loginToYour}>Login to your account</div>
        </div>
      </div>
      <div className={styles.groupParent}>
        <Form />
        <div className={styles.pleaseFillYour}>
          Please fill your information below
        </div>
      </div>
      <img
        className={styles.xnixlinecrossIcon}
        onClick={Home}
        alt=""
        src="/xnixlinecross.svg"
      />
    </div>
  );
};

export default RegisterIDPW;
