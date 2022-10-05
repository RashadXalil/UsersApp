import React from 'react'
import './Add.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'
const Add = () => {
  return (
    <div className="add__form">
      <p>Add User</p>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input type="email" placeholder="firstname" />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input type="email" placeholder="lastname" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Birthday</FormLabel>
        <Input type="date" />
      </FormControl>
      <Button className="add__btn">Add</Button>
    </div>
  )
}

export default Add
