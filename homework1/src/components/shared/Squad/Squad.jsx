// /* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import deleteIconX from '../Icon/icons/delete_x.svg';
import styles from './Squad.css';
// import { listenerCount } from 'cluster';

export default class Squad extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    heroes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,  
    ).isRequired,
    // stats: PropTypes.string.isRequired
    // onDeleteNote: PropTypes.func.isRequired,
    // onUpdateNote: PropTypes.func.isRequired,
  };

  sumOfProps(squad, skill) {
    // return squad.reduce(
    //   (accumulator, currentValue) => accumulator[skill] + currentValue[skill],
    // );
    let sum = 0;
    for (let i = 0; i < squad.length; i++) {
      sum = sum + squad[i][skill];     
    }
    return sum;
  }
  handleDelete () {

  }

  render() {
    const { squad } = this.props;

    return (
          <div className={styles.squad}>
            <Icon onClick={this.handleDelete} src={deleteIconX}/>
          <div className={styles.column}>
              <p className={styles.text}>Heroes:</p>
              <ul>
                {squad.map(hero => (
                  <li key={hero.id} className={styles.item}>
                    {hero.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <p className={styles.text}>Stats:</p>
              <ul>
                <li key={1} className={styles.item}>
                  Strength: {this.sumOfProps(squad, "strength")}
                </li>
                <li key={2} className={styles.item}>
                  Intelligence: {this.sumOfProps(squad, "intelligence")}
                </li>
                <li key={3} className={styles.item}>
                  Speed: {this.sumOfProps(squad, "speed")}
                </li>
              </ul>
            </div>
          </div>
        );
  }
}


// state = { isBeingEdited: false };

  // static getDerivedStateFromProps() {
  //   console.log('[NOTE]: getDerivedStateFromProps');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('[NOTE]: componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('[NOTE]: shouldComponentUpdate');

  //   const propsChanged = nextProps.text !== this.props.text;
  //   const stateChanged = this.state.isBeingEdited !== nextState.isBeingEdited;

  //   return propsChanged || stateChanged;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('[NOTE]: getSnapshotBeforeUpdate');

  //   return {
  //     scrollPos: 10,
  //   };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('[NOTE]: componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('[NOTE]: componentWillUnmount');
  // }

  // onEditStart = () => this.setState({ isBeingEdited: true });

  // onEditEnd = () => this.setState({ isBeingEdited: false });

  // handleDelete = () => this.props.onDeleteNote(this.props.id);

  // handleUpdate = text => {
  //   this.props.onUpdateNote({ id: this.props.id, text });
  //   this.onEditEnd();
  // };
