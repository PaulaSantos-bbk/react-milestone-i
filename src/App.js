import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Input from './components/Input'

function App() {
  const [userData, setUserData] = useState({})
  const onChangeInput = (event) =>
    setUserData({ ...userData, [event.target.id]: event.target.value })
  const onFormSubmit = (event) => {
    event.preventDefault()
    console.log(userData)
  }
  const validateForm = () => {
    return userData.password && userData.password === userData.confirmPassword
  }

  return (
    <div className='app'>
      <Form onSubmit={validateForm() ? onFormSubmit : null}>
        <Input
          id='name'
          label='Your name:'
          onChange={onChangeInput}
          type='text'
          value={userData.name}
        />
        <Input
          id='email'
          label='Your email:'
          onChange={onChangeInput}
          type='email'
          value={userData.email}
        />
        <Input
          id='password'
          label='Your password:'
          onChange={onChangeInput}
          type='password'
          value={userData.password}
        />
      </Form>
    </div>
  )
}

export default App
