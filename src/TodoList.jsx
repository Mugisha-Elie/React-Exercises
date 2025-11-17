// import React from "react";
import './index.css';

const TodoList = ({todos}) => {
    // const renderedTodo = todos.map(todo => {
    //     return <div key={todo.id}>{todo.title}</div>
    // })

    const renderedTodo = todos.map(({id, title, completed}) => {
        return <div key={id}>
            {completed && '✔'}
            {completed || '✖'} 
            {title}
        </div> 
    })

    return <section>{renderedTodo}</section>
}

export default TodoList;
