/* eslint-disable*/
import { v4 } from "uuid";
import React, { Component, Fragment } from 'react';
import Panel from './shared/Panel/Panel';
import List from './shared/List/List';
import HeroesFilter from './shared/HeroesFilter/HeroesFilter';
import Button from './shared/Button/Button';
import Info from './shared/Info/Info';
import Form from './shared/Form/Form';
import { getAvailableHeroes, getSquadHeroes } from '../utils/selectors';
import getSquadStats from '../utils/api';
import styles from './App.css';

const heroesArr = [
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
  {
    id: v4(),
    name: "batman",
    strength: 8,
    intelligence: 10,
    speed: 3
  },
  {
    id: v4(),
    name: "flash",
    strength: 6,
    intelligence: 8,
    speed: 10
  },
  {
    id: v4(),
    name: "spiderman",
    strength: 6,
    intelligence: 9,
    speed: 6
  },
  {
    id: v4(),
    name: "thor",
    strength: 10,
    intelligence: 5,
    speed: 7
  },
  {
    id: v4(),
    name: "wonderwoman",
    strength: 6,
    intelligence: 9,
    speed: 7
  },
  {
    id: v4(),
    name: "catwoman",
    strength: 5,
    intelligence: 10,
    speed: 9
  }
]

class App extends Component {
  
  state = {
    heroes: heroesArr,
    filter: '',
    squadIds: [],
    savedSquads: []
  };

  getInfo = id => {
    const selectedHero = this.state.heroes.filter(hero => hero.id === id)[0];
    console.log(`Hero's name: ${selectedHero.name}`);
    console.log(`Speed: ${selectedHero.strength}`);
    console.log(`Intelligence: ${selectedHero.intelligence}`);
    console.log(`Speed: ${selectedHero.speed}`);
  };

  handleAddHero = hero => {
    this.setState(prevState => ({
      heroes: [...prevState.heroes, hero]
    }));
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  deleteHero = id => {
    this.setState(prevState => ({
      heroes: prevState.heroes.filter(hero => hero.id !== id)
    }));
  };

  addToSquad = id => {
    this.setState(prevState => ({
      squadIds: [...prevState.squadIds, id]
    }));
  };
  

  deleteHeroFromSquad = id => {
    this.setState(prevState => ({
      squadIds: prevState.squadIds.filter(heroId => heroId !== id)
    }));
  };

  resetSquad = () => {
    this.setState( () => ({
      squadIds: []
    }));
  };

  saveSquad = () => {
    if (this.state.squadIds.length === 0) return;
    const squad = {
      id: v4(),
      heroes: getSquadHeroes(this.state.heroes, this.state.squadIds)
    }
    this.setState(prevState => ({
      squadIds: [],
      savedSquads: [...prevState.savedSquads, squad]
    }));
  };

  deleteSquad = id => {
    this.setState(prevState => ({
      savedSquads: prevState.savedSquads.filter(squad => squad.id !== id)
    }));
  };

  render() {

    const { heroes, squadIds, filter, savedSquads } = this.state;
    const availableHeroes = getAvailableHeroes(heroes, squadIds, filter);
    const squadHeroes = getSquadHeroes(heroes, squadIds);
    const stats = getSquadStats(squadHeroes);

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
                additable 
                onAddToSquad={this.addToSquad}
                onDeleteHero={this.deleteHero}
                onGetInfo={this.getInfo}
              />
            </Fragment>
          } />

          <Panel title="Squad Editor" content={
            <Fragment>
              <Button text="Save Squad" onClick={this.saveSquad}/>
              <Button text="Reset Editor" onClick={this.resetSquad}/>
              <Info stats={stats}/>
              <List 
                name="hero" 
                data={squadHeroes}
                additable={false} 
                onGetInfo={this.getInfo}
                onDeleteHeroFromSquad={this.deleteHeroFromSquad}
              />
            </Fragment>
          } />

          <Panel title="Saved Squad" content={
            <List 
              name="squad" 
              data={savedSquads} 
              additable={false}
              onDeleteSquad={this.deleteSquad}
            />
          } />

        </div>
      </div>
    );
  }
}

export default App;
