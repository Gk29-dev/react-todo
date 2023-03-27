
const AddTask = (props) => {

    //onChange event handler
    const task = (e) => {
       props.setTask(e.target.value);
    }

    //Adding new todo task, on submit event handler
    const addNewTask = (e) => {
      e.preventDefault()
    
        if(props.taskField !== ""){
            props.newTask.push(props.taskField);
    
          }
      
     
      
      //Empty the input box after task is created
      props.setTask("");
    }

    const updateTheTask = (e) => {
        e.preventDefault();

        if(props.taskField !== ""){
            props.newTask.splice(props.idToUpdateTask, 1, props.taskField);
            props.setTask("");
            props.setStatusEditButton(false);
        } 
 
    }
    return (
        <div className="container my-5">

            <form className="form-inline mx-5" id="form" onSubmit={props.editTaskButton ? updateTheTask : addNewTask}>
                <div className="row">
                    <div className="col-md-10 flex-grow-1" id="demo">
                       <input type = "text" placeholder="Enter you task" className="form-control" value={props.taskField}  onChange = {task}/>
                     </div>
                     
                     {/* Adding new Task */}
                     <div className="col-md-2 text-center">
                        <input type = "submit" value = {props.editTaskButton ? "Edit" : "Add"} className= {props.editTaskButton ? "btn btn-warning" : "btn btn-success"}/>
                     </div>
                     
                </div>
            </form>
        </div>
    )
}

export default AddTask;