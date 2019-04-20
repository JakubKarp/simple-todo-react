import React, { Component } from 'react';
import uniqid from 'uniqid';
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
        id: uniqid(), name: "", hour: "", minutes: ""
      }
    }
    this.newTaskHandler = this.newTaskHandler.bind(this)
    this.saveTaskHandler = this.saveTaskHandler.bind(this)
  }

  newTaskHandler(val) {
    this.setState( prevState => {
      return {
        newTask: Object.assign(prevState.newTask, val)
      }
    })   
  }

  saveTaskHandler() {
    this.setState( prevState => ({
      tasks: [...prevState.tasks, prevState.newTask],
      newTask: {
        id: uniqid(), name: "", hour: "", minutes: ""
      }
    }))
  }


  render() {
    const tasks = this.state.tasks.map( (el) => {
      return <Tasks key={el.id} name={el.name} hour={el.hour} minutes={el.minutes} />
    })   

    return (
      <div className="App">
        <div>
          {tasks}
          <Form newTask={val => this.newTaskHandler(val)}
            
            name={this.state.newTask.name}
            hour={this.state.newTask.hour}
            minutes={this.state.newTask.minutes}

          />
          <Actions saveTask={() => this.saveTaskHandler()} />
        </div>
      </div>
    );
  }
}

export default App;
