import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../API/auth'
import Forme from '../shared/Form'

const SignUp = () => {
  const [state, setState] = useState({ email: '', password: '', passwordConfirmation: '' })

  const onSubmit = (event) => {
    event.preventDefault()

    signUp(state).then(res => {
      console.log('sign up Componenet, signed up success::', res.data.user)
      return (<Redirect to="/"/>)
    })
      .catch(console.log)
  }

  return (
    <Forme header="Sign Up" type="signup" onSubmit={onSubmit} state={state} setState={setState}/>
  )
}

export default SignUp
