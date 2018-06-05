import React, { Component, Fragment } from 'react';
import Panel from './shared/Panel/Panel.jsx';
import List from './shared/List/List.jsx';
import HeroesFilter from './shared/HeroesFilter/HeroesFilter.jsx';
import Button from './shared/Button/Button.jsx';
import Info from './shared/Info/Info.jsx';
import Form from './shared/Form/Form.jsx';
import { getAvailableHeroes, getSquadHeroes } from '../utils/selectors.js';
import styles from './App.css';
import { v4 } from "uuid";

const heroes = [
  {
    id: v4(),
    name: "superman",
    strength: 10,
    intelligence: 8,
    speed: 7
  },
  {
    id: v4(),
    name: "superwoman",
    strength: 7,
    intelligence: 10,
    speed: 9
  },
  {
    id: v4(),
    name: "supergirl",
    strength: 3,
    intelligence: 7,
    speed: 6
  },
]

const squads = [
  {
    id: v4(),
    squad: [
      { 
        id: v4(),
        name: "batman",
        strength: 22,
        intelligence: 24,
        speed: 23
      },
      {
        id: v4(),
        name: "flash",
        strength: 22,
        intelligence: 24,
        speed: 23
      },
      {
        id: v4(),
        name: "spiderman",
        strength: 22,
        intelligence: 24,
        speed: 23
      }],
  },
  {
    id: v4(),
    squad: [
      {
        id: v4(),
        name: "thor",
        strength: 22,
        intelligence: 24,
        speed: 23
      },
      {
        id: v4(),
        name: "wonderwoman",
        strength: 22,
        intelligence: 24,
        speed: 23
      },
      {
        id: v4(),
        name: "catwoman",
        strength: 22,
        intelligence: 24,
        speed: 23
      }],
  }
]

class App extends Component {
  
  state = {
    heroes: heroes,
    filter: '',
    squadIds: [],
    savedSquads: squads,
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  handleAddHero = hero => {
    this.setState(prevState => ( {
      heroes: [...prevState.heroes, hero]
    }));
  };
  
  deleteHero = id => {
    this.setState(prevState => ({
      heroes: prevState.heroes.filter(hero => hero.id !== id)
    })); 
  };

  getInfo = id => {
    const hero = this.state.heroes.filter(hero => hero.id === id)[0];
    console.log(`Hero's name: ${hero.name}`);
    console.log(`Speed: ${hero.strength}`);
    console.log(`Intelligence: ${hero.intelligence}`);
    console.log(`Speed: ${hero.speed}`);
  };

  addToSquad = id => {
    this.setState(prevState => ({
      squadIds: [...prevState.squadIds, id]
    }));
  };

  render() {

    const { heroes, squadIds, filter, savedSquads } = this.state;
    const availableHeroes = getAvailableHeroes(heroes, squadIds, filter);
    const squadHeroes = getSquadHeroes(heroes, squadIds);
    console.log('squadIds from render', squadIds);
    console.log('heroes from render', heroes);

    return (
      <div>
        <h1 className={styles.title}>Super Squad</h1>
        <hr/>
        <div className={styles.container}>

          <Panel title="Create Hero" content={
            <Form onAddHero={this.handleAddHero}/>
          } />

          <Panel title="Heros" content={
            <Fragment>
              <HeroesFilter onFilterChange={this.handleFilterChange} filter={filter} />
              <List 
                name="hero" 
                data={availableHeroes} 
                additable={true} 
                onAddToSquad={this.addToSquad}
                onDeleteHero={this.deleteHero}
                onGetInfo={this.getInfo}
              />
            </Fragment>
          } />

          <Panel title="Squad Editor" content={
            <Fragment>
              <Button text="Save Squad" />
              <Button text="Reset Editor" />
              <Info />
              <List 
                name="hero" 
                data={squadHeroes}
                additable={false} 
              />
            </Fragment>
          } />

          <Panel title="Saved Squad" content={
            <List 
              name="squad" 
              data={savedSquads} 
              additable={false}
            />
          } />

        </div>
      </div>
    );
  }
}

export default App;
