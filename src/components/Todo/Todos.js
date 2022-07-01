import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const Todos = () => {
    const [todos, setTodes] = useState([])

    useEffect(() => {
        fetch('https://gentle-scrubland-01299.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setTodes(data)
            })
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo key={todo._id}
                    todo = {todo}
                    >
                </Todo>)
            }
        </div>
    )
}

export default Todos