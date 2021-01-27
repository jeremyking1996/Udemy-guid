import './App.css';
import styled from 'styled-components';
import React, { Component } from 'react';
import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons'

const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  color: black;
}
`

class App extends Component {
  state = {
    persons: [
      { id: "77dk", name: 'Jeremy', age: 47},
      { id: "fjfj", name: 'Kyle', age: 70},
      { id: "jfjf", name: 'Joanne', age: 2}
    ],
    otherState: 'some other value',
    showPersons: true
};
    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });
      
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} )
    };

    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons.slice();
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

render () {
      const style= {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      };
      let persons = null;

      if (this.state.showPersons) {
        persons = (
          <div>
            <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
            {this.state.persons.map((person, index) =>{
              return (
              <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
              )
            })}
        </div>
        )

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
      }


      let classes = [];
      if (this.state.persons.length <= 2){
        classes.push('red');
      }
      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }

    return(
      <div className="App">
        <h1>Hi, Im a react app!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons}onClick={() => this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
          {persons}
      </div>
      
    );
};
};
export default App;