import React, { useEffect, useState } from 'react'
import TodoItem from '../components/TodoItem'
import { Box, Button, CircularProgress, Grid, Pagination, Stack, Typography } from '@mui/material'
import TodoFilter from '../components/TodoFilter'

const TodoList = () => {

    const [todoListItems, setTodoListItems] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [paginatedItems, setPaginatedItems] = useState([])
    const itemsPerPage = 5

    const fetchData = async () => fetch('https://dummyjson.com/todos').then(res => res.json())
    const localStorageData = localStorage.getItem('todo_list')

    useEffect(() => {
        const init = async () => {
            if (localStorageData) {
                setTodoListItems(JSON.parse(localStorageData))
            } else {
                const { todos } = await fetchData()
                setTodoListItems(todos)
                localStorage.setItem('todo_list', JSON.stringify(todos))
            }
            setPageNo(1)
        }
        init()
    }, [localStorageData])

    useEffect(() => {
        const tempData = todoListItems.slice(itemsPerPage * (pageNo - 1), (itemsPerPage * pageNo))
        console.log(itemsPerPage * (pageNo - 1), (itemsPerPage * pageNo))
        setPaginatedItems(tempData)
    }, [todoListItems, pageNo])


    return (
        <Stack sx={{ gap: 3, mt: 5 }}>
            <Grid container spacing={2}>
                <Grid size={4}>
                    <div>
                        <Button size='small' sx={{color: 'white'}} variant='outlined' onClick={() => fetchData()}>Fetch Data</Button>
                    </div>
                </Grid>
                <Grid size={4}>
                    <Typography variant='h4'>To do List</Typography>
                </Grid>
                <Grid size={4}>
                    <TodoFilter setState={setTodoListItems}/>
                </Grid>
            </Grid>

            <Box style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignSelf: 'center', gap: 20, width: '40vw' }}>
                {paginatedItems?.length ? paginatedItems.map(item =>
                    <TodoItem data={item} />
                ) :
                    <CircularProgress />
                }
                <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'gray' }}>
                    <Pagination count={Math.floor(todoListItems.length / itemsPerPage)} color="primary" onChange={(event, page) => setPageNo(page)} />
                </Box>

            </Box>

        </Stack>
    )
}

export default TodoList