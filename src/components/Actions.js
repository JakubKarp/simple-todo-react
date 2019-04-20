import React from 'react';

const Actions = (props) => {
    const actionContainer = {
        "margin": "16px 0 0"
    }
    const styleActions = {
        "fontSize": "18px",
        "width": "300px",
        "background": "#a52a2a",
        "border": "5px solid #ddd", 
        "padding": "10px",
        "margin": "1px 0",
        "color": "#ddd",
        "textTransform": "uppercase"
    }

    return (
        <div style={actionContainer} >
            <div onClick={() => props.saveTask()} style={styleActions}>Dodaj</div>
            <div style={styleActions}>Usuń</div>
        </div>
    )
    
    
}

export default Actions;