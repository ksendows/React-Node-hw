import React, { Component, Fragment } from 'react';
import styles from './Container.css';
import Panel from '../Panel/Panel.jsx';
import List from '../List/List.jsx';
import HeroesFilter from '../HeroesFilter/HeroesFilter.jsx';
import Button from '../Button/Button.jsx';
import Info from '../Info/Info.jsx';
import Form from '../Form/Form.jsx';
// import data from '../../../data.js';

class Container extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Panel title="Create Hero" content={
                    <Form />
                }/>
                <Panel title="Heros" content={
                    <Fragment>
                        <HeroesFilter /> 
                        <List heroes={data} additable={true}/>
                    </Fragment>       
                }/>
                <Panel title="Squad Editor" content={
                    <Fragment>
                        <Button text="Save Squad" />
                        <Button text="Reset Editor" />
                        <Info />
                        <List heroes={data} additable={false}/>
                    </Fragment>
                } />
                <Panel title="Saved Squad" />
            </div>
        );
    }
}

export default Container;
