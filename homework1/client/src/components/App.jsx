import React, { Component, Fragment } from 'react';
import Panel from './shared/Panel/';
import List from './List';
import HeroesFilter from './HeroesFilter';
import Button from './shared/Button/';
import Info from './Info';
import Form from './Form';
import Loader from './shared/Loader';
import { getSquadStats, getAvailableHeroes, getSquadHeroes } from '../utils/selectors';
import * as api from '../utils/api';
import styles from './App.css';

class App extends Component {
  
  state = {
    heroes: [],
    filter: '',
    squadIds: [],
    squads: [],
    isLoading: false
  };
  componentDidMount() {
    this.fetchData("heroes");
    this.fetchData("squads");
  }

  getInfo = id => {
    const selectedHero = this.state.heroes.filter(hero => hero.id === id)[0];
    console.log(`Hero's name: ${selectedHero.name}`);
    console.log(`Speed: ${selectedHero.strength}`);
    console.log(`Intelligence: ${selectedHero.intelligence}`);
    console.log(`Speed: ${selectedHero.speed}`);
  };

  fetchData = (stateField) => {
    const url = stateField==="heroes" 
      ? 'http://localhost:3001/api/heroes' 
      : 'http://localhost:3001/api/squads';

    this.setState({ isLoading: true });

    api.fetchData(url).then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState({ [stateField]: data, isLoading: false });
    });
  };

  addData = (dataToAdd, stateField) => {
    
    const url = stateField === "heroes"
      ? 'http://localhost:3001/api/heroes'
      : 'http://localhost:3001/api/squads';

    this.setState({ isLoading: true });

    api.addData(dataToAdd, url).then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState(prevState => ({
        [stateField]: [...prevState[stateField], data],
        isLoading: false,
      }));
    });
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  deleteData = (id, stateField) => {
    this.setState({ isLoading: true });

    const url = stateField==="heroes"
      ? "http://localhost:3001/api/heroes/"
      : "http://localhost:3001/api/squads/"

    api.deleteData(id, url).then(({ error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState(prevState => ({
        [stateField]: prevState[stateField].filter(field => field.id !== id),
        isLoading: false,
      }));
    });
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
    const squadHeroes = getSquadHeroes(this.state.heroes, this.state.squadIds);
    const squad = {
      heroes: squadHeroes,
      stats: getSquadStats(squadHeroes)
    }
    this.addData(squad, "squads");
    this.setState( () => ({
      squadIds: [],
    }));
  };

  render() {

    const { heroes, squadIds, filter, squads, isLoading } = this.state;
    const availableHeroes = getAvailableHeroes(heroes, squadIds, filter);
    const squadHeroes = getSquadHeroes(heroes, squadIds);
    const stats = getSquadStats(squadHeroes);

    return (
      <div>
        <h1 className={styles.title}>Super Squad</h1>
        <hr/>
        {isLoading && <Loader width={80} height={80} />}
        <div className={styles.container}>

          <Panel title="Create Hero" content={
            <Form onAddHero={this.addData}/>
          } />

          <Panel title="Heros" content={
            <Fragment>
              <HeroesFilter onFilterChange={this.handleFilterChange} filter={filter} />
              <List 
                name="hero" 
                data={availableHeroes} 
                additable 
                onAddToSquad={this.addToSquad}
                onDeleteHero={this.deleteData}
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
              data={squads} 
              additable={false}
              onDeleteSquad={this.deleteData}
            />
          } />

        </div>
      </div>
    );
  }
}

export default App;
