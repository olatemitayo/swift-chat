import { AuthLayout } from '@/components'
import { PasswordInput, TextInput } from '@mantine/core'
import React from 'react'

export default function Register() {
  return (
    <AuthLayout  title={'Create an Account'} BtnText={'Sign Up'}  preHref={'Have an account?'} href={'/'} hrefAction={'Login'}>
           <TextInput label="Email" />
        <PasswordInput label="Password" />
        <PasswordInput label="Confirm Password" />
    </AuthLayout>
  )
}
