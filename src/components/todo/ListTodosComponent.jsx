export default function ListTodosComponent() {

    const todos = [
        {id:1, description:'Learn Python', done:false, targetDate:'01/01/2025'},
        {id:2, description:'Learn Java', done:false, targetDate:'01/08/2025'},
        {id:3, description:'Learn PHP', done:true, targetDate:'01/05/2025'}
    ]

    return (
        <div className='container'>
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>Done</td>
                            <td>Targe Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}