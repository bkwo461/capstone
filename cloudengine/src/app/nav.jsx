'use client';
import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import { useRouter } from 'next/navigation';


export default function Nav() {
    const router = useRouter();
    const HomePage = () => {
        router.push('/');
    };
    const AboutUs = () => {
        router.push('/aboutUs');
    };
    const Registration = () => {
        router.push('/registration');
    }

    return (
        <nav className={styles.topNavBar}>
            <div className={styles.topNavMenu}>
                <div className={styles.home} onClick={HomePage}>
                    <p>Home</p>
                </div>
                <div className={styles.aboutUs} onClick={AboutUs}>
                    <p>About Us</p>
                </div>
                <div className={styles.myAccount} onClick={AboutUs}>
                    <p>My Account</p>
                </div>
                <div className={styles.services} onClick={AboutUs}>
                    <p>Services</p>
                </div>
            </div>
            <div className={styles.loginButton}>
                <div className={styles.text1}>Log in</div>
                <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
            </div>
            <div className={styles.registerBtn}>
                <div className={styles.text1} onClick={Registration}>Register</div>
                <img className={styles.iconWrapper} alt="" src="/iconwrapper.svg" />
            </div>
            <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />

        </nav>
    );
}
