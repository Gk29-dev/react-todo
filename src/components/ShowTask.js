const ShowTask = (props) => {
   const items =  props.taskList.map((list, index) => {
        return (
            <div key={index} className = "my-3 row list justify-content-between justify-content-md-start">
                <div className="col-md-3">
                    <li  className="py-2 d-inline">{list}</li>
                </div>

                <div className="col-md-1">
                   <button onClick={ () => props.editTask(index, list)} className="btn btn-warning px-2 offset-1">Edit</button>
               </div>

                <div className="col-md-1">
                   <button onClick={ () => props.deleteTask(index)} className="btn btn-danger px-2 offset-1">Done</button>
               </div>

            </div>
        )        
    })
    return (
        <> 
         <ul className="list-unstyled text-white text-xl mx-md-5 list" >
           {items}
         </ul>
        </>
    )
}

export default ShowTask;