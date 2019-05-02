import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.css';
import Tasks from './components/Tasks';
import Form from './components/Form';


class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id: 0, name: "śniadanie", hour: 10, minutes: 12},
        {id: 1, name: "obiad", hour: 16, minutes: 11},
        {id: 2, name: "kolacja", hour: 19, minutes: 2}
      ],
      newTask: {
        id: uniqid(), name: "", hour: -1, minutes: -1
      },
      now: {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
    }
    this.timer = this.timer.bind(this)
    this.newTaskHandler = this.newTaskHandler.bind(this)
    this.saveTaskHandler = this.saveTaskHandler.bind(this)
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this)
    this.editTaskHandler = this.editTaskHandler.bind(this)
    this.cancelEditTaskHandler = this.cancelEditTaskHandler.bind(this)
  }

  timer() {
    this.setState({
      now: {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
    })
  }

  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId})
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
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
          id: uniqid(), name: "", hour: -1, minutes: -1
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
		this.setState(prevState => ({
      newTask: {...prevState.tasks[id]}
    }))
  }

  cancelEditTaskHandler() {
    this.setState({
      newTask: {
        id: uniqid(), name: "", hour: -1, minutes: -1
      }
    })
  }

  render() {
    const tasks = this.state.tasks.map( (el) => {
      
      return <Tasks 
        key={el.id}
        idElement={el.id}
        name={el.name} 
        hour={el.hour} 
        minutes={el.minutes}
        delete={this.deleteTaskHandler}
        edit={this.editTaskHandler}
        timeNow={this.state.now}
         
      />  
    })   

    return (
      <div className="App">
        <div>
          {tasks}          
          <Form 
            name={this.state.newTask.name}
            hour={this.state.newTask.hour}
            minutes={this.state.newTask.minutes}
            newTask={val => this.newTaskHandler(val)}
            saveTask={() => this.saveTaskHandler()}
            cancelEdit={() => this.cancelEditTaskHandler()}
          />
        </div>
      </div>
    );
  }
}

export default App;
