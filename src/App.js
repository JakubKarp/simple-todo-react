import React, { Component } from 'react';
import uniqid from 'uniqid';
import FlipMove from 'react-flip-move';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';
import Actions from './components/Actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id: uniqid(), name: "spanie", hour: 10, minutes: 12},
        {id: uniqid(), name: "jedzenie", hour: 11, minutes: 11}
      ],
      newTask: {
        id: uniqid(), name: "", hour: "", minutes: ""
      }
    }
    this.newTaskHandler = this.newTaskHandler.bind(this)
    this.saveTaskHandler = this.saveTaskHandler.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    // this.onHover = this.onHover.bind(this)
  }

  newTaskHandler(val) {
    this.setState( prevState => {
      return {
        newTask: Object.assign(prevState.newTask, val)
        //object.asign() - przypisuje do obecnego obiektu nowe wartości
      }
    })   
  }

  saveTaskHandler() {
    this.setState( prevState => ({
      tasks: [...prevState.tasks, prevState.newTask],
      //do tablicy wcześniejszych obiektów dodaje nowy obiekt
      newTask: {
        id: uniqid(), name: "", hour: "", minutes: ""
      }
    }))
  }

  deleteTask(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(item => item.id !== id)
    }))    
  }

  // onHover(element) {
  //   element.setAttribute("style", "background: red")
  // }

  render() {
    const tasks = this.state.tasks.map( (el) => {
      return <Tasks 
        key={el.id}
        idElement={el.id}
        name={el.name} 
        hour={el.hour} 
        minutes={el.minutes}
        click={this.deleteTask}
        // hover={this.onHover}  
      />  
    })   

    return (
      <div className="App">
        <div style={{ position: 'relative' }}>
          {/* <FlipMove duration={5000} easing="ease-out"> */}
            {tasks}
          {/* </FlipMove> */}
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
