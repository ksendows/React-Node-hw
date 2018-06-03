import React, { Component } from 'react';
import styles from './Container.css';
import Panel from '../Panel/Panel.jsx';

class Container extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Panel title="Create Hero"></Panel>
                <Panel title="Heros">
                </Panel>
                <Panel title="Squad Editor">
                </Panel>
                <Panel title="Saved Squad">
                </Panel>
            </div>
        );
    }
}

export default Container;
