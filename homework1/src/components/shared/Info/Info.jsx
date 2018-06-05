import React, { Component} from 'react';
import styles from './Info.css';

class Info extends Component {
    render() {
        return (
            <div>
                <p className={styles.info}>Strength: 15</p>
                <p className={styles.info}>Intelligence: 16</p>
                <p className={styles.info}>Speed: 17</p>
            </div>
        );
    }
}

export default Info;
