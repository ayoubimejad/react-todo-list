import { useEffect } from "react"

export function Lis(Props) {
    function deleteTodos(id) {
        const filtr = Props.todos.filter((todo) => {
            return todo.id !== id;
        })
        Props.setTodos(filtr);
    }
    useEffect(() => {
        console.log(Props.todos)
    })
    return (
        <li key={Props.todo.id}>
            <label>
                <input type="checkbox" />
                {Props.todo.title}
            </label>
            <button className='btn btn-danger' onClick={() => deleteTodos(Props.todo.id)} >delete</button>
        </li>
    )
}