import React, { useEffect, useState } from 'react'
import '../add/Add.css'
import moment from 'moment/moment'
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
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  let id = useParams()
  let defaultDate = new Date()
  defaultDate.setDate(defaultDate.getDate() + 4)
  const [currentUser, setCurrentUser] = useState({})
  const [firstname, setFirstname] = useState(currentUser)
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState(defaultDate)
  const navigator = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8080/users/${id.id}`).then((res) => {
      setFirstname(res.data.firstname)
      setLastname(res.data.lastname)
      setEmail(res.data.email)
      setBirthday(Date())
      setBirthday(moment(res.data.birthday).format('L'))
    })
  }, [])
  const editHandler = () => {
    axios
      .patch(`http://localhost:8080/users/${id.id}`, {
        firstname: firstname,
        lastname: lastname,
        email: email,
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success('User Edited !')
          setTimeout(() => {
            navigator('/users')
          }, 1000)
        }
      })
  }
  return (
    <div className="add__form">
      <p>Edit User</p>
      <FormControl>
        <FormLabel>First Name</FormLabel>
        <Input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value)
          }}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Last Name</FormLabel>
        <Input
          value={lastname}
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
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </FormControl>
      <Button className="add__btn" onClick={editHandler}>
        Edit
      </Button>
      <Toaster />
    </div>
  )
}

export default Edit
