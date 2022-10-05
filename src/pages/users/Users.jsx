import React, { useEffect, useState } from 'react'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'
import './Users.css'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react'
import axios from 'axios'
import { toast, Toaster } from 'react-hot-toast'
const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/users').then((res) => {
      setUsers(res.data)
    })
  }, [])
  const deleteHandler = (id) => {
    axios.delete(`http://localhost:8080/users/${id}`).then((res) => {
      setUsers(res.data)
      toast.success('User Deleted !')
    })
  }
  return (
    <div>
      <div className="users__header">
        <h2>Users</h2> <Link to="/add">Add User</Link>
      </div>
      <TableContainer>
        <Table variant="striped" colorScheme="red">
          <TableCaption>Users</TableCaption>
          <Thead>
            <Tr>
              <Th>FirstName</Th>
              <Th>LastName</Th>
              <Th>Email</Th>
              <Th>Birthday</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user) => {
              return (
                <Tr key={user._id}>
                  <Td>{user.firstname}</Td>
                  <Td>{user.lastname}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    {moment(user.birthday).format('MMMM Do YYYY, h:mm:ss a')}
                  </Td>
                  <Td>
                    <Button>Edit</Button>
                  </Td>
                  <Td>
                    <Button onClick={() => deleteHandler(user._id)}>
                      Delete
                    </Button>
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Toaster />
    </div>
  )
}

export default Users
