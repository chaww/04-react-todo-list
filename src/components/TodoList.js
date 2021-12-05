import React from 'react';
import TodoItem from './TodoItem'

function TodoList({ taskList, delTask }) {
    return (
        <div className="panel">
            {taskList.map((task, index) => {
                return <TodoItem key={index} index={index} text={task} delTask={delTask}></TodoItem>
            })}
        </div>
    )
}

export default TodoList
