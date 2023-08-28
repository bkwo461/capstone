'use client';
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import AboutUs from './aboutUs/page';

export default function Nav() {
    const router = useRouter();
    const HomePage = () => {
        router.push('/');
    };
    const AboutUs = () => {
        router.push('/aboutUs');
    };

    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <div className={styles.logo} onClick={HomePage}>
                        <p>Home</p>
                    </div>
                </li>
                <li>
                    <div className={styles.logo} onClick={AboutUs}>
                        <p>About Us</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
