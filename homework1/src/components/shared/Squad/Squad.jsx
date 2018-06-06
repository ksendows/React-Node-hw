import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import deleteIconX from '../Icon/icons/delete_x.svg';
import styles from './Squad.css';

export default class Squad extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    heroes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,  
    ).isRequired,
    onDeleteSquad: PropTypes.func.isRequired
  };

  static sumOfProps(squad, skill) {
    return squad.reduce(
      (accumulator, currentValue) => accumulator + parseInt(currentValue[skill],10), 0);
  }

  handleDeleteSquad = () => this.props.onDeleteSquad(this.props.id);
  
  render() {
    const { heroes } = this.props;

    return (
          <div className={styles.squad}>
          <div className={styles.squad__icon}>
            <Icon onClick={this.handleDeleteSquad} src={deleteIconX} />
          </div>
          <div className={styles.column}>
              <p className={styles.text}>Heroes:</p>
              <ul className={styles.list}>
                {heroes.map(hero => (
                  <li key={hero.id} className={styles.item}>
                    {hero.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.text}>Stats:</p>
          <ul className={styles.list_stat}>
                <li key={1} className={styles.item_stat}>
                  Strength: {Squad.sumOfProps(heroes, "strength")}
                </li>
                <li key={2} className={styles.item_stat}>
                  Intelligence: {Squad.sumOfProps(heroes, "intelligence")}
                </li>
                <li key={3} className={styles.item_stat}>
                  Speed: {Squad.sumOfProps(heroes, "speed")}
                </li>
              </ul>
            </div>
          </div>
        );
  }
}

