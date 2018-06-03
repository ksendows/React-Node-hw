import React, { Component } from 'react';
import './App.css';
import Button from './shared/Button/Button.jsx';
import List from './shared/List/List.jsx';
import Container from './shared/Container/Container.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Super Squad</h1>
        <hr/>
        <Container>
        </Container>
        <Button text="Add Hero" disabled />
        <Button text="Save Squad" />
        <Button text="Reset Editor" />
      </div>
    );
  }
}

export default App;
