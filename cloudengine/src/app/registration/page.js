'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./index.module.css";
import style from "./form.module.css";

const Register = () => {

  const router = useRouter();

  const Home = () => {
    router.push('/');
  };

  const EmailVerification = () => {
    const queryParams = {
      firstName,
      lastName,
      email,
    };
    const queryString = new URLSearchParams(queryParams).toString();
    router.push(`/emailVerification?${queryString}`);
  };

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
            <div className={styles.next1} onClick={EmailVerification}>Next</div>
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

        <div className={style.groupParent}>
          <div className={style.rectangleParent}>
            <div className={style.groupChild} />
            <div className={style.reEnterPasswordWrapper}>
              <input
                type="text"
                className={style.reEnterPassword} // You might need to adjust the styles
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <img
              className={style.iconfeatherIcon}
              alt=""
              src="/iconfeather-icon1.svg"
            />
          </div>
          <div className={style.rectangleGroup}>
            <div className={style.groupItem} />
            <div className={style.iconlyboldprofile} />
            <div className={style.idWrapper}>
              <input
                type="text"
                className={style.id} // You might need to adjust the styles
                placeholder="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <img
              className={style.iconfeatherIcon1}
              alt=""
              src="/iconfeather-icon.svg"
            />
          </div>
          <div className={style.rectangleContainer}>
            <div className={style.groupChild} />
            <div className={style.passwordWrapper}>
              <input
                type="email"
                className={style.password} // You might need to adjust the styles
                placeholder="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <img
              className={style.interfaceEssentialkeyIcon}
              alt=""
              src="/iconfeather-icon.svg"
            />
          </div>
        </div>

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

export default Register;
