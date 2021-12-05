import React from 'react'

function TodoItem({ index, text, delTask }) {

    return (
        <a className="panel-block is-active todoItem todoItem__text">
            <span className="panel-icon">
                <i className="mdi mdi-circle" aria-hidden="true"></i>
            </span>
            <div className="todoItem__text">
                {text}
            </div>
            <button className="delete is-medium todoItem__close" onClick={()=>delTask(index)}></button>
        </a>
    )
}

export default TodoItem
