import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import { useState } from 'react';

function App() {
  const [taskField, setTask] = useState("");
  const [newTask, updatedTask] = useState([]);
  const  [editTaskButton, setStatusEditButton] = useState(false);
  const [idOfTask, setIdOfTask] = useState("");

  const deleteTask = (id) => {
    // console.log("Delete the Task", id);
    const newTaskLists = newTask.filter((element, i) => {
        return i !== id;
    });
   
    updatedTask(newTaskLists);
    console.log(updatedTaskLists);

  }

  const editTask = (id, task) => {
    const findTask = newTask.find((element) => {
      return element === task
    });

    setTask(findTask);
    setStatusEditButton(true);
    setIdOfTask(id);

    //First remove the item from the list and then add new updated item in the list

  }
  return (
    <div className="App container-fluid my-5">
      <h1 className='text-center text-white'>React Todo App</h1>
      <AddTask taskField = {taskField} newTask = {newTask} setTask = {setTask} editTaskButton = {editTaskButton} idToUpdateTask = {idOfTask} setStatusEditButton = {setStatusEditButton}/>

      <div className="container my-5">
         <ShowTask taskList = {newTask} deleteTask = {deleteTask} editTask = {editTask}/>
      </div>
    </div>
  );
}

export default App;
