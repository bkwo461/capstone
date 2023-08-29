'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./header.module.css";



const Header = () => {

  const router = useRouter();

    const HomePage = () => {
        router.push('/');
    };
    const AboutUs = () => {
        router.push('/aboutUs');
    };

  return (
    <div className={styles.topNavBarParent}>
      <div className={styles.topNavBar}>
        <div className={styles.topNavMenu}>
          <div className={styles.home} onClick={HomePage}>Home</div>
          <b className={styles.aboutUs} onClick={AboutUs}>About Us</b>
          <div className={styles.myAccount}>My Account</div>
          <div className={styles.services}>Services</div>
        </div>
        <div className={styles.loginButton}>
          <div className={styles.text}>Log in</div>
          <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
        </div>
        <div className={styles.registerBtn}>
          <div className={styles.text}>Register</div>
          <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
        </div>
        <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
      </div>
      <b className={styles.homeAboutContainer}>
        <span>{`Home     `}</span>
        <span className={styles.span}>{`»     `}</span>
        <span className={styles.aboutUs1}>{`About Us `}</span>
      </b>
    </div>
  );
};

export default Header;
