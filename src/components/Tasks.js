import React, {Component} from 'react';

class Tasks extends Component{
    constructor(props) {
        super(props)
        this.hoverOnHanlder = this.hoverOnHanlder.bind(this)
        this.hoverNoHandler = this.hoverNoHandler.bind(this)
    }

    hoverOnHanlder(e) {
        e.target.style.background = "indianred"
        e.preventDefault()
    }

    hoverNoHandler(e) {
        e.target.style.background = "#8C7AAE"
        e.preventDefault()
    }

    render() {
        const styleTask = {
            "fontSize": "18px",
            "width": "300px",
            "background": "#8C7AAE",
            "border": "5px solid #ddd", 
            "padding": "10px",
            "margin": "1px 0",
            "color": "#ddd"
        }
       
        return (
            <div 
                style={styleTask}
                onClick={() => this.props.click(this.props.idElement)}
                onMouseOver={this.hoverOnHanlder}
                onMouseLeave={this.hoverNoHandler}  
            >
            
                <span>{this.props.name}</span>
                <span> {this.props.hour}</span>
                <span>:{this.props.minutes}</span>
            </div>
        )
    }
    
}

export default Tasks;