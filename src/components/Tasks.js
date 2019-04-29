import React, {Component} from 'react';

const Tasks = (props) => {
    const styleTask = {
        "fontSize": "18px",
        "width": "300px",
        "border": "5px solid #ddd", 
        "padding": "10px",
        "margin": "1px 0",
        "color": "#ddd"
    }
    
    return (
        <div 
            className="task"
            style={styleTask}                          
        >
            {props.name} - {props.hour}:{props.minutes}
            <div
                className="deleteTask"
                onClick={() => props.click(props.idElement)}
            >x</div>            
        </div>
    )
}



export default Tasks;