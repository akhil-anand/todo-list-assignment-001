import { Card, CardContent, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const TodoItem = ({ data,...props }) => {
const [todoData, setTodoData] = useState({...props})

useEffect(()=>{
    setTodoData(data)
}, [data])

const handleOnClick = () => {
    setTodoData({...todoData, completed: !todoData.completed})
    const localStorageData = localStorage.getItem('todo_list')
    const todos = JSON.parse(localStorageData)

    const updatedTodos = todos.map(item => {
        if(item.id === todoData.id){
            return {...todoData, completed: !todoData.completed}
        } else {
            return item
        }
    })
    localStorage.setItem('todo_list', JSON.stringify(updatedTodos))

}

    return (
        <Card 
        key={data.id} 
        variant="outlined" 
        sx={{ color: 'text.secondary', fontSize: 2, borderRadius: 2, cursor: 'pointer' }}
        onClick={handleOnClick}
        >
            <CardContent>
                <Typography variant="h6">{todoData.todo}</Typography>
                <Typography variant='caption'>status: {todoData.completed ? 'completed' : 'to be done'}</Typography>
            </CardContent>
        </Card>
    )
}

export default TodoItem