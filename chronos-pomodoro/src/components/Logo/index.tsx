import styles from './styles.module.css'
import * as React from "react";

import TomatoIcon from '../../assets/tomato.svg?react'

export function Logo() {
  return <div className={styles.logo}>
    <a className={styles.logoLink} href="#">
      <TomatoIcon/>
      <span>Chronos</span>
    </a>
  </div>
}
