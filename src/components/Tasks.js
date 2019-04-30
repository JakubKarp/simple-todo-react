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
            <div className="bodyTask">
            {props.name} - {props.hour}:{props.minutes}
            </div>
            <div
                className="editTask"
                onClick={() => {props.edit(props.idElement)}}
            >&#9998;</div>
            <div
                className="deleteTask"
                onClick={() => props.delete(props.idElement)}
            >&#10006;</div>


        </div>
    )
}



export default Tasks;