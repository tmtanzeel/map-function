import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person';

class App extends Component {
  state= {
    people: [
      {name: "Tanzeel", skill: "ReactJS"},
      {name: "Abhishek", skill: "Python"},
      {name: "Amit", skill: "JavaScript"},
      {name: "Sunil", skill: "PHP"}
    ]
  }
  render () {
    return (
      <div className="App">
        {
          this.state.people.map(singlePerson=>{
            return <Person name={singlePerson.name} skill={singlePerson.skill} />
          })
        }
      </div>
    );
  }
}

export default App;
