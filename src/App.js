import React, { Component } from 'react';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Actions from './components/Actions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id: 0, name: "spanie", hour: 10, minutes: 12},
        {id: 1, name: "jedzenie", hour: 11, minutes: 11}
      ],
      newTask: {
        id: Number, name: "", hour: Number, minutes: Number
      }
    }
    this.newTaskHandler = this.newTaskHandler.bind(this)
  }

  newTaskHandler(val) {
    console.log(val);
    
  }


  render() {
    const tasks = this.state.tasks.map( (el) => {
      return <Tasks key={el.id} name={el.name} hour={el.hour} minutes={el.minutes} />
    })   

    return (
      <div className="App">
        <div>
          {tasks}
          <Form newTask={val => this.newTaskHandler(val)} />
          <Actions />
        </div>
      </div>
    );
  }
}

export default App;
