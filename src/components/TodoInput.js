import React, { useState } from 'react'

function TodoInput({ addTask }) {

  const [task, setTask] = useState('')

  function button_onClick() {
    addTask(task);
    setTask('');
  }

  function input_onChange(event) {
    setTask(event.target.value)
  }
  
  function onKeyPress(event){
    if(event.key === 'Enter'){
      button_onClick()
    }
  }

  return (
    <div className="box">
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input
            className="input" type="text" placeholder="Add Task" value={task} 
            onChange={input_onChange}
            onKeyPress={onKeyPress}
          />
        </p>
        <p className="control">
          <button onClick={button_onClick} className="button is-info">
            Add
          </button>
        </p>
      </div>
    </div>
  )
}

export default TodoInput
