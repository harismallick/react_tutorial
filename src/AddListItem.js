import React from 'react';
import { useRef } from 'react';

const AddListItem = ({newItem, setNewItem, submitNewItem}) => {

    const inputRef = useRef();
    return (
        <form onSubmit={(e) => submitNewItem(e)}>
            <div className='form-group'>
                <label htmlFor="addListItem">Add Item</label>
                    <input
                        id="addListItem"
                        className='form-control'
                        type="text"
                        autoFocus
                        placeholder='Add item'
                        required
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        ref={inputRef}
                    />
            </div>
        <br />
            <button
                type='submit'
                className='btn btn-primary'
                onClick={() => inputRef.current.focus()}
            >Add to list</button>
        </form>
    )
}

export default AddListItem