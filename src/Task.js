export const Task = (props) => {
    return (
        <div className="task"
        style={{ backgroundColor: props.completed ? "green" : "white" }} /*  IF the props are TRUE(completed), make it green. Otherwise, its WHITE   */
        >
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completedTask(props.id)}> Complete </button>
            <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    );
}

