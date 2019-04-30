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
        {id: 0, name: "spanie", hour: 10, minutes: 12},
        {id: 1, name: "jedzenie", hour: 11, minutes: 11}
      ],
      newTask: {
        id: uniqid(), name: "", hour: "", minutes: ""
      }
    }
    this.newTaskHandler = this.newTaskHandler.bind(this)
    this.saveTaskHandler = this.saveTaskHandler.bind(this)
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this)
    this.editTaskHandler = this.editTaskHandler.bind(this)
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
    this.setState(prevState => {
      const editedEventExists = prevState.tasks.find(
        el => el.id === prevState.newTask.id
        )
      
      let updatedEvents;
      if (editedEventExists) {
        updatedEvents = prevState.tasks.map(el => {
          if (el.id === prevState.newTask.id) return prevState.newTask;
          else return el;
        })
      } else {
        updatedEvents = [...prevState.tasks, prevState.newTask]
      }

      return {
        tasks: updatedEvents,
        newTask: {
          id: uniqid(), name: "", hour: "", minutes: ""
        }
      }

    })
     
    // this.setState( prevState => ({
    //   tasks: [...prevState.tasks, prevState.newTask],
    //   //do tablicy wcześniejszych obiektów dodaje nowy obiekt
    //   newTask: {
    //     id: uniqid(), name: "", hour: "", minutes: ""
    //   }
    // }))
  }

  deleteTaskHandler(id) {
		this.setState(prevState => ({
      tasks: prevState.tasks.filter(item => item.id !== id)
    }))    
  }

  editTaskHandler(id) {
		console.log("TCL: App -> editTaskHandler -> id", id)
    //this.state.tasks
		console.log("TCL: App -> editTaskHandler -> this.state.tasks", this.state.tasks[id])
    this.setState(prevState => ({
      newTask: {...prevState.tasks[id]}
    }))
  }

  render() {
    const tasks = this.state.tasks.map( (el) => {
      console.log("el.id", el.id);
      
      return <Tasks 
        key={el.id}
        idElement={el.id}
        name={el.name} 
        hour={el.hour} 
        minutes={el.minutes}
        delete={this.deleteTaskHandler}
        edit={this.editTaskHandler}
         
      />  
    })   

    return (
      <div className="App">
        <div style={{ position: 'relative' }}>
          {/* <FlipMove duration={5000} easing="ease-out"> */}
            {tasks}
          {/* </FlipMove> */}
          <Form 
            newTask={val => this.newTaskHandler(val)}
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
