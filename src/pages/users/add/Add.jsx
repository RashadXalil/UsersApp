import React, { useEffect, useState } from 'react'
import './Add.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
const Add = () => {
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() + 4)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState(defaultDate)
  const addHandler = () => {
    axios
      .post('http://localhost:8080/users', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        birthday: birthday,
      })
      .then((res) => console.log(res))
  }
  return (
    <div className="add__form">
      <p>Add User</p>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="email"
          placeholder="firstname"
          onChange={(e) => {
            setFirstname(e.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="email"
          placeholder="lastname"
          onChange={(e) => {
            setLastname(e.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Birthday</FormLabel>
        <Input
          type="date"
          onChange={(e) => {
            setBirthday(e.target.value)
          }}
        />
      </FormControl>
      <Button className="add__btn" onClick={addHandler}>
        Add
      </Button>
    </div>
  )
}

export default Add
