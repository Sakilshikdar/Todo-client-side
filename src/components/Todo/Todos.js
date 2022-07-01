import React, { useEffect, useState } from 'react'
import Todo from './Todo'

const Todos = () => {
    const [todos, setTodes] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
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