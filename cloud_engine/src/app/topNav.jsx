'use client';
import React from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

export default function topNav() {
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
        <nav className={styles.navigation}>
            <ul>
                <div className={styles.logo} onClick={HomePage}>
                    <img
                        src="/Logo.png"
                        alt="Logo"
                        style={{ width: '150px', height: '150', marginLeft: 35 }}
                    />
                </div>

                <li>
                    <div className={styles.logo} onClick={HomePage}>
                        <p>Home</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo}>
                        <p> | </p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={ServicePage}>
                        <p>Service</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo}>
                        <p> | </p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={AboutusPage}>
                        <p>About Us</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo}>
                        <p> | </p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={MyaccountPage}>
                        <p>My Account</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo}>
                        <p> | </p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={DeployPage}>
                        <p>Deploy Test</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo}>
                        <p> | </p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={LoginPage}>
                        <p>Login</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={RegisterPage} style={{ marginRight: 50 }}  >
                        <p>Register</p>
                    </div>
                </li>
            </ul>
        </nav>
    );

}