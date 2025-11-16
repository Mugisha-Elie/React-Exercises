// import React from "react";
import './index.css';

const TodoList = ({todos}) => {
    const renderedTodo = todos.map(todo => {
        return <div key={todo.id}>{todo.title}</div>
    })

    return <section>{renderedTodo}</section>
}

export default TodoList;
