import Link from 'next/link'
import React from 'react'
import styles from "./register.module.css"
import { register } from '@/lib/action';

function RegisterForm() {

  return (
      <form className={styles.form} action={register}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="password" placeholder="password again" name="passwordRepeat" />
      <button>Register</button>
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  )
}

export default RegisterForm