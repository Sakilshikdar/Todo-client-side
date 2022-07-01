import React, { useEffect, useState } from 'react';
import './TodoDetails.css'

const TodoDetails = () => {
    const [todo, setTodo] = useState([]);

    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/todoDetails`)
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [todo])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`;
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


    const handleUpdate = (e, id) => {
        console.log(id);
        e.preventDefault();
        const updateTodo = {
            update: e.target.update.value,
        }
        console.log('I am from dhaka');
        fetch(`http://localhost:5000/updateTodo/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTodo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('update done')
                    e.target.reset()
                }
                else {
                    alert('something wrong')
                }
            })
    }

    return (
        <div className='todo mb-8'>
            <div className='lg:w-96 w-80'>
                <div className="w-full bg-base-100 shadow-xl py-4">
                    {
                        todo.map(item =>
                            <>
                                <h2 className='p-5 text-2xl'>{item.name}</h2>
                                <button
                                    href="#" alt=''
                                    className="ml-6 btn mr-5 btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>

                                <label for="my-modal-6" className="btn btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline">edit</label>

                                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                        <h3 class="font-bold text-lg">Update your item!</h3>
                                        <form onSubmit={() => handleUpdate(item._id)} className='grid grid-cols-1 gap-5 mt-5'>
                                            <div class="modal-action">
                                                <input name='update' defaultValue={item.name} type="text" className="input input-bordered w-full " />
                                                <input type="submit" value='update' className="btn btn-secondary" />
                                            </div>
                                        </form>
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