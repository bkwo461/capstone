'use client';
import React from 'react';
import styles from './page.module.css'
import TopNav from './topNav';


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={`${styles.top_menu_bar} px-2 py-3`}>
        <h1 className="d-inline-block bold">Cloud Engine</h1>
      </div>
      <TopNav />
    </div>
  );
}


