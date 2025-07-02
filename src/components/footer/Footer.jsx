import React from 'react'
import styles from "./footer.module.css"

function Footer() {
  return (
      <div className={styles.container}>
      <div className={styles.logo}>Edu Blog</div>
      <div className={styles.text}>
        Edu Blog © All rights reserved.
      </div>
    </div>
  )
}

export default Footer