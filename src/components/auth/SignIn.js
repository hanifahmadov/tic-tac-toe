import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom'

import StoreContext from '../context/context'
import { SIGNEDIN_USER } from '../context/action-type'
import { signIn } from '../../API/auth'
import Forme from '../shared/Form'

const SignIn = () => {
  const { store, dispatch } = useContext(StoreContext)
  const user = store.signedin_user

  const [state, setState] = useState({ email: '', password: '' })

  const onSubmit = (event) => {
    event.preventDefault()

    signIn(state).then(res => {
      dispatch({ type: SIGNEDIN_USER, payload: res.data.user })
    })
  }
  return (
    user
      ? <Redirect to="/main" />
      : <Forme header="Sign In" type={false} state={state} setState={setState} onSubmit={onSubmit}/>
  )
}

export default SignIn
