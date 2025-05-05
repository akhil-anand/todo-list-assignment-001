import { OutlinedInput } from '@mui/material'
import React from 'react'

const TodoFilter = ({setState}) => {

  const handleOnChange = (event) => {
    console.log(event.target.value)
    if(event.target.value === ''){
      const localStorageData = localStorage.getItem('todo_list')
      setState(JSON.parse(localStorageData))
    } else {
    setState(prevState => prevState.filter(item => item.todo.includes(event.target.value)))
    }
  }

  return (
    <div>
      <OutlinedInput placeholder='Search Todo' size='small' sx={{color: 'white'}} onChange={handleOnChange} />
    </div>
  )
}

export default TodoFilter