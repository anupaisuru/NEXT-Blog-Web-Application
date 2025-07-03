import RegisterForm from '@/components/registerForm/RegisterForm'
import React from 'react'
import styles from "./register.module.css"

function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  )
}

export default RegisterPage