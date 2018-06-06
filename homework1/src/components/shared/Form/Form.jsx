import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import styles from './Form.css';
import { v4 } from "uuid";

const INITIAL_STATE = {
  name: '',
  strength: '1',
  intelligence: '1',
  speed: '1'
};

export default class Form extends Component {
  
  static propTypes = {
    onAddHero: PropTypes.func.isRequired
  };

  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name === '') {
      return;
    }
    const hero = {
      id: v4(),
      name: this.state.name,
      strength: parseInt(this.state.strength, 10),
      intelligence: parseInt(this.state.intelligence, 10),
      speed: parseInt(this.state.speed, 10)
    }
    this.props.onAddHero(hero);

    this.setState({ ...INITIAL_STATE });
    return;
  };

  selectRender(skill) {
    return (
      <select onChange={this.handleSelectChange} name = {skill} className={styles.select}>
      {[...Array(10)].map((x, i) => <option value={i + 1} key={i}>{i + 1}</option>)}
      </select>
    )
  };

  handleInputChange = e => {
    const value = e.target.value;
    this.setState({ name: value });
  };

  handleSelectChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  render() {

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <Input 
          name="name" 
          placeholder="Hero name" 
          value={this.state.name} 
          onChange={this.handleInputChange}
        />
        <label className={styles.label}>
          Strength: {this.selectRender("strength")}
        </label>
        <label className={styles.label}>
          Intelligence: {this.selectRender("intelligence")}
        </label>
        <label className={styles.label}>
          Speed: {this.selectRender("speed")}
        </label>
        <Button type="submit" text="Add Hero"/>
      </form>
    );
  }
}

