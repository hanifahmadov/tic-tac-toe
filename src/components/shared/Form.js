import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../../all-style/Form.scss'

const Forme = ({ header, type, onSubmit, state, setState }) => {
  const handleChange = (event) =>
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  return (
    <div className='form-parent-wrapper'>
      <div className='form-wrapper'>
        <h3 className='form-header3'>{header}</h3>
        <Form className='form' onSubmit={onSubmit}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              placeholder='Enter email'
              value={state.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              type='password'
              placeholder='Password'
              value={state.password}
              onChange={handleChange}

            />
          </Form.Group>

          {type && <Form.Group controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              name='passwordConfirmation'
              type='password'
              placeholder='Confirm Password'
              value={state.passwordConfirmation}
              onChange={handleChange}
            />
          </Form.Group>
          }
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}

export default Forme
