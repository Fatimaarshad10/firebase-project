export const Task = (props)=>{
    return (
        <div style={{backgroundColor : props.completed ? 'rgb(143, 185, 143)' : 'white'}}>
        <h1>{props.taskName}</h1>
        <button onClick={()=> props.completedTask(props.id)} style={{backgroundColor: "black", color:'white' }}>select</button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    )
}
