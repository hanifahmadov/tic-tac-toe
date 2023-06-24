/* eslint-disable */
import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Body } from './components/body/Body'

// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'
// import SignOut from './components/auth/SignOut'
// import ChangePassword from './components/auth/ChangePassword'
// import MainContent from './components/body/Main'

const App = () => {
  return (

    <Fragment >
      <Header />
      <Body/>
  
    </Fragment>
  )
}

export default App
