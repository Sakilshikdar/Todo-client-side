import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewTodo = () => {
    const [toggle, setToggle] = useState(true);


    const handleSubmit = (even) => {
        even.preventDefault();
        const ratting = {
            name: even.target.todo.value,
        }
        console.log(ratting)
        fetch('http://localhost:5000/newTodo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratting)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast('todo add')
                    even.target.reset()
                }
                else {

                }

            })
       }
    

    return (
        <div class="my-4">
            <h1 className='text-2xl flex justify-center text-primary font-bold mb-4 font-mono'>Todo List!!</h1>
            <div className="w-full lg:w-96">
                <div class="card shadow-2xl">
                    <div class="p-3">
                        <form onSubmit={handleSubmit} className=''>
                            <input placeholder='Your Nodes' name='todo' type="text" className="input input-bordered w-full mb-9" />
                            <>
                                <input type="submit" value='Add' name='btn1' className="btn btn-warning w-20" />
                            </>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewTodo;