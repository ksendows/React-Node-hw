import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Button from './shared/Button/';
import Input from './shared/Input/';
import styles from './Form.css';

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
      name: this.state.name,
      strength: parseInt(this.state.strength, 10),
      intelligence: parseInt(this.state.intelligence, 10),
      speed: parseInt(this.state.speed, 10)
    }
    this.props.onAddHero(hero, "heroes");

    this.setState({ ...INITIAL_STATE })
  };

  selectRender(skill) {
    return (
      <select onChange={this.handleSelectChange} name = {skill} className={styles.select}>
      {[...Array(10)].map((x, i) => <option value={i + 1} key={i.toString()}>{i + 1}</option>)}
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
        <div className={styles.label}>
          Strength: {this.selectRender("strength")}
        </div>
        <div className={styles.label}>
          Intelligence: {this.selectRender("intelligence")}
        </div>
        <div className={styles.label}>
          Speed: {this.selectRender("speed")}
        </div>
        <Button type="submit" text="Add Hero"/>
      </form>
    );
  }
}

