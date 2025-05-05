import { Box, Button, Card, CardContent, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
const [todoTitle, setTodoTitle] = useState('')
const navigate = useNavigate()

const handleTodoCreation = () => {

  const localStorageData = localStorage.getItem('todo_list')
  const todos = JSON.parse(localStorageData)
  const newTodo = { id: todos.length + 1, todo: todoTitle, completed: false, userId: 152 }
  localStorage.setItem('todo_list', JSON.stringify([newTodo, ...todos]))
  navigate('../')
  }
  
  return (
    <Stack>
        <Box>
            <Card>
                <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Typography>Enter Todo Title</Typography>
                    <OutlinedInput size='small' onChange={(event) => setTodoTitle(event.target.value)}/>
                      <div>
                      <Button variant='outlined' disabled={!todoTitle.length} onClick={handleTodoCreation}>Create</Button>                                              
                      </div>
                </CardContent>
            </Card>
        </Box>
    </Stack>
  )
}

export default AddTodo