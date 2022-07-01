import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './TodoDetails.css'

const TodoDetails = () => {
    const [todo, setTodo] = useState([]);

    const [updated, setUpdated] = useState(false);
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        fetch(`https://gentle-scrubland-01299.herokuapp.com/todoDetails`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [todo])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://gentle-scrubland-01299.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = todo.filter(service => service._id !== id);
                    setTodo(remaining);
                    setUpdated(!updated)

                })
        }
    }
 
    const handleEdit = id =>{
        console.log(id);
    }

    return (
        <div className='todo'>
            <div className='lg:w-96 w-80'>
                <div className="w-full bg-base-100 shadow-xl">
                    {
                        todo.map(item =>
                            <>
                                <h2 className='p-5 text-2xl'>{item.name}</h2>
                                <button
                                    href="#" alt=''
                                    className="btn mr-5 btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>

                                <label for="my-modal-6"  className="btn btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</label>

                            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                                <div class="modal-box">
                                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 class="font-bold text-lg">Update your item!</h3>
                                    <form onSubmit={() => handleEdit(item._id)}className='grid grid-cols-1 gap-5 mt-5'>
                                        <input name='displayName' defaultValue={item.name} type="text" className="input input-bordered w-full " />
                                    </form>
                                    <div class="modal-action">
                                        <label for="my-modal-6" class="btn">update</label>
                                    </div>
                                </div>
                            </div>
                        </>
                        )
                    }

                </div>
               
                    

            </div>
        </div >
    );
};

export default TodoDetails;