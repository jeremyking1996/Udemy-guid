import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    let classes = [];
      if (props.persons.length <= 2){
        classes.push('red');
      }
      if (props.persons.length <= 1) {
        classes.push('bold');
      }

    return (
        <div>
        <h1>Hi, Im a react app!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <StyledButton alt={this.state.showPersons}onClick={() => this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        </div>
    );
};

export default cockpit;