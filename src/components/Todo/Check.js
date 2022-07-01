import React from 'react'

const Check = ({ item }) => {
    console.log(item)
    const { name, _id } = item;
    
    const handleUpdate = (e) => {
        console.log(_id);
        e.preventDefault();
        const updateTodo = {
            update: e.target.update.value,
        }
        console.log('I am from dhaka');
        fetch(`http://localhost:5000/updateTodo/${_id}`, {
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
        <div>
            <form onSubmit={() => handleUpdate()} className='grid grid-cols-1 gap-5 mt-5'>
                <div class="modal-action">
                    <input name='update' defaultValue={name} type="text" className="input input-bordered w-full " />
                    <input type="submit" value='update' className="btn btn-secondary" />
                </div>
            </form>
        </div>
    )
}

export default Check