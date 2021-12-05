import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

let useEffectFirst = true;

function App() {

  const [taskList, setTaskList] = useState([]);

  function addTask(task) {
    setTaskList([...taskList, task]);
  }

  function delTask(index) {
    setTaskList([...taskList.filter((v, i) => i != index)]);
  }

  useEffect(() => {
    if (useEffectFirst) {
      console.log('aaa')
      useEffectFirst = false;
      let data = [];
      let rawData = localStorage.getItem('REACT_TODO_LIST__TASK_LIST');
      let jsonData = JSON.parse(rawData);
      data = jsonData;
      setTaskList(data || []);
    } else {
      localStorage.setItem('REACT_TODO_LIST__TASK_LIST', JSON.stringify(taskList));
    }
    console.log('useEffect');
    return () => { }
  }, [taskList])

  return (
    <div className="App">
      <div className="header"></div>
      <div className="nav"></div>
      <div className="content">
        <TodoInput addTask={addTask} />
        {taskList[0] ? <TodoList taskList={taskList} delTask={delTask} /> : ''}
      </div>
    </div>
  );
}

export default App;
