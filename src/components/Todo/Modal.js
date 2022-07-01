import React from 'react';

const Modal = () => {
    const handleEdit = id => {
        console.log(id)
    }
    return (
        <div>
          <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 class="font-bold text-lg">Update your item!</h3>
                        <form onSubmit={handleEdit} className='grid grid-cols-1 gap-5 mt-5'>
                            <input name='displayName' type="text"  className="input input-bordered w-full " />
                        </form>
                        <div class="modal-action">
                            <label for="my-modal-6" class="btn">update</label>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Modal;