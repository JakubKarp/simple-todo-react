import React from 'react';
import PropTypes  from 'prop-types';
import { hourMinuteToSeconds, secondsToHourMinuteSecond } from "../utils";
import Overlay from './Overlay/Overlay';

const Tasks = (props) => {
    const styleTask = {
        "fontSize": "18px",
        "width": "300px",
        "border": "5px solid #ddd", 
        "padding": "10px",
        "margin": "1px 0",
        "color": "#ddd"
    }

    const taskInSeconds = hourMinuteToSeconds(props.hour, props.minutes);
    const nowInSeconds = hourMinuteToSeconds(props.timeNow.hour, props.timeNow.minutes) + props.timeNow.seconds
    const difference = taskInSeconds - nowInSeconds;
    const diffText = difference > 0 ? secondsToHourMinuteSecond(difference) : "jutro";
    
    return (
        <div 
            className="task"
            style={styleTask}                          
        >
            <div className="bodyTask">
            {props.name} - {diffText}
            </div>
            <div className="editTask" onClick={() => {props.edit(props.idElement)}} >&#9998;</div>
            <div
                className="deleteTask"
                onClick={() => props.delete(props.idElement)}
            >&#10006;</div>
            <Overlay>
                <h1>{props.name}</h1>
                <p>{props.hour.toString().padStart(2,0)}:{props.minutes.toString().padStart(2,0)}</p>
            </Overlay>


        </div>
    )
}

Tasks.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.number,
    minutes: PropTypes.number,
    edit: PropTypes.func,
    delete: PropTypes.func,
    timeNow: PropTypes.shape({
        hour: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number
    })

}

export default Tasks;