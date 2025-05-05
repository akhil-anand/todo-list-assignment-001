import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import TodoList from './layout/TodoList'
import AddTodo from './components/AddTodo'
import { AppBar, Toolbar } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter basename="/todo-list-assignment-001">
        <AppBar position='absolute' color='dark'>
          <Toolbar sx={{ gap: 2}}>
            <Link style={{ color: 'white' }} to="/todo-list">To do List</Link> |
            <Link style={{ color: 'white' }} to="/add-todo">Add To do</Link>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/todo-list' element={<TodoList />} />
          <Route path='/add-todo' element={<AddTodo />} />
          <Route path='*' element={<Navigate to="/todo-list" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
