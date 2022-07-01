import React from 'react'
import NewTodo from '../Todo/NewTodo'
import TodoDetails from '../Todo/TodoDetails'
import Todos from '../Todo/Todos'
import Footer from './Footer'
import './Home.css'

const Home = () => {
    return (
        <div className='container bg-emerald-100   '>
            <NewTodo></NewTodo>
            <TodoDetails></TodoDetails>
            <Todos></Todos>
        </div>
    )
}

export default Home