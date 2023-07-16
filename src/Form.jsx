import { useState } from "react";

function Form(Props) {
    const [newItem, setNewItem] = useState("");
    function preventFun(e) {
        e.preventDefault();
        Props.addTodos(newItem)
         setNewItem('')
    }
    return (
        <form className='new-item-form' onSubmit={preventFun} >
            <div className='form-row'>
                <label htmlFor="item">New Item</label>
                <input type="text" id='item' value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}
export default Form;