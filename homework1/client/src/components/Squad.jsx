import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './shared/Icon';
import deleteIconX from './shared/Icon/icons/delete_x.svg';
import styles from './Squad.css';

export default class Squad extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    heroes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,  
    ).isRequired,
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        spd: PropTypes.number.isRequired,
      }).isRequired,
    onDeleteSquad: PropTypes.func.isRequired
  };
  
  handleDeleteSquad = () => this.props.onDeleteSquad(this.props.id, "squads");
  
  render() {
    const { heroes, stats } = this.props;

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
                  Strength: {stats.str}
                </li>
                <li key={2} className={styles.item_stat}>
                  Intelligence: {stats.int}
                </li>
                <li key={3} className={styles.item_stat}>
                  Speed: {stats.spd}
                </li>
              </ul>
            </div>
          </div>
        );
  }
}

