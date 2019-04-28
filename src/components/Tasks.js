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
            onClick={() => props.click(props.idElement)}              
        >
            <span>{props.name}</span>
            <span> {props.hour}</span>
            <span>:{props.minutes}</span>
        </div>
    )
}



export default Tasks;