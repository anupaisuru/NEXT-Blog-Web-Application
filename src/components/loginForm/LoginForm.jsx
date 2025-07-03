"use client"
import React from 'react'
import styles from "./login.module.css"
import Link from 'next/link'
import { login } from '@/lib/action'
import { useFormState } from 'react-dom';

function LoginForm() {

  const [state, formAction] = useFormState(login, undefined);

  return (
      <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
       {state?.error}
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  )
}

export default LoginForm