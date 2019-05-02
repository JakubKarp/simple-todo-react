import React, { Component } from 'react';
import './Overlay.css';

class Overlay extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    toggleVisible() {
        this.setState(prevState => {
            return{
                visible: !prevState.visible
            }
        });
    }

    render() {
        const overlayClass = 
            this.state.visible === true ? "overlay__modal overlay__modal--visible" : "overlay__modal"    

        return (
            <div className="overlay">
                <span onClick={() => this.toggleVisible()} >info</span>
                <div className={overlayClass}>
                    {this.props.children}
                    <span onClick={() => this.toggleVisible()} className="overlay__close">Zamknij</span>
                </div>
            </div>
        );
    }
}

export default Overlay;