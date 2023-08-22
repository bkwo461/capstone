'use client';
import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const NavBar = () => {

  const router = useRouter();

    // Homepage
    const HomePage = () => {
        router.push('/');
    };

    // Login
    const LoginPage = () => {
        router.push('/login');
    };

    // Register
    const RegisterPage = () => {
        router.push('/register');
    };

    // About Us
    const AboutusPage = () => {
        router.push('/aboutUs')
    };

    // My Account
    const MyaccountPage = () => {
        router.push('/myAccount')
    };

    // Services
    const ServicePage = () => {
        router.push('/service')
    };

    const DeployPage = () => {
        router.push('/deploy')
    };
    
  return (
    <div className={styles.topNavBarHome}>
      <b className={styles.servicesInstanceContainer}>
        <span>{`Services   `}</span>
        <span className={styles.span}>{`»   `}</span>
        <span>{`Instance   `}</span>
        <span className={styles.span}>»</span>
        <span>{`   `}</span>
        <span className={styles.overview}>Overview</span>
      </b>
      <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
      <div className={styles.userProfile}>
        <img
          className={styles.userProfileChild}
          alt=""
          src="/rectangle-6@2x.png"
        />
        <b className={styles.tonyWatson}>Tony Watson</b>
      </div>
      <div className={styles.menuBar}>
        <b className={styles.home} onClick={HomePage}>Home</b>
        <b className={styles.services} onClick={ServicePage}>Services</b>
        <b className={styles.aboutUs} onClick={AboutusPage}>About Us</b>
        <b className={styles.myAccount} onClick={MyaccountPage}>My Account</b>
        <div className={styles.menuBarChild} />
        <div className={styles.menuBarItem} />
        <div className={styles.menuBarInner} />
      </div>
    </div>
  );
};

export default NavBar;
