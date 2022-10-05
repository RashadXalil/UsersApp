import React, { useEffect, useState } from 'react'
import './Add.css'
import { Toaster, toast } from 'react-hot-toast'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() + 4)
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState(defaultDate)
  const navigator = useNavigate()
  const addHandler = () => {
    axios
      .post('http://localhost:8080/users', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        birthday: birthday,
      })
      .then((res) => {
        if (res.status == 201) {
          toast.success('User Created !')
          setInterval(() => {
            if (res.status == 201) {
              navigator('/users')
            }
          }, 2000)
        } else {
          toast.error('something went wrong !!!')
        }
      })
  }
  return (
    <div className="add__form">
      <p>Add User</p>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          placeholder="firstname"
          onChange={(e) => {
            setFirstname(e.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          type="text"
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
      <Toaster />
    </div>
  )
}

export default Add
