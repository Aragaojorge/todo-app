import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'

export default function ListTodosComponent() {

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    useEffect(() => refreshTodos(), [])

    function refreshTodos(){
 
        retrieveAllTodosForUsernameApi('in28minutes')
        .then(response => setTodos(response.data))
        .catch(error => console.log(error))

    }        
    
    function deleteTodo(id) {
        deleteTodoApi(username, id)
        .then(() => {
            setMessage(`Delete of todo with id ${id} successful!`)
            refreshTodos()
            }
        )
        .catch(error=>console.log(error))
    }


    function updateTodo(id) {
        console.log('Clicked: ' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo() {

        console.log(navigate, 'aqui')
        navigate('/todo/-1')

    }

    return (
        <div className='container'>
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Targe Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>
                                            <button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
                <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
            </div>
        </div>
    )
}