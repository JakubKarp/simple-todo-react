import React from 'react';

const Form = (props) => {
    const formContainer = {
        "margin": "16px 0 0"
    }
    const styleForm = {
        "fontSize": "18px",
        "width": "300px",
        "background": "#ddd",
        "border": "5px solid #8C7AAE", 
        "padding": "10px",
        "margin": "1px 0",
        "color": "#8C7AAE",
        "display": "flex"
    }
    const styleLabel = {
        "marginRight": "20px",
        "width" : "30%"
    }
    const styleInput = {
        "padding": "4px",
        "width" : "50%"
    }

    return (
        <div style={formContainer}>
            <div style={styleForm}>
                <label style={styleLabel} htmlFor="name">zadanie</label>
                <input 
                    style={styleInput} 
                    type="text"
                    id="name"
                    name="name"
                    value={props.name}
                    onChange={e => props.newTask({ [e.target.name]: e.target.value })} 
                />
            </div>
            <div style={styleForm}>
                <label style={styleLabel} htmlFor="hour" >godzina</label>
                <input 
                    style={styleInput} 
                    type="tel"
                    id="hour"
                    name="hour"
                    value={props.hour} 
                    onChange={e => props.newTask({ [e.target.name]: e.target.value })}
                />
            </div>
            <div style={styleForm}>
                <label style={styleLabel} htmlFor="minutes" >minuty</label>
                <input 
                    style={styleInput} 
                    type="tel"
                    id="minutes"
                    name="minutes"
                    value={props.minutes} 
                    onChange={e => props.newTask({ [e.target.name]: e.target.value })}
                />
            </div>    
        </div>
    )
    
    
}

export default Form;