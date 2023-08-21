'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

function MyComponent() {

  function handleButtonClick() {
    console.log("Button pressed");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Deploy Test</button>
    </div>
  );
}

export default MyComponent;
