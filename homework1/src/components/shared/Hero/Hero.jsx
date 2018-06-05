/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon.jsx';
import styles from './Hero.css';
import infoIcon from '../Icon/icons/info.svg';
import deleteIconX from '../Icon/icons/delete_x.svg';
import addUserIcon from '../Icon/icons/add-user.svg';
import deleteIcon from '../Icon/icons/delete.svg';

export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    additable: PropTypes.bool.isRequired,
    // onDeleteHero: PropTypes.func.isRequired,
    // onGetInfo: PropTypes.func.isRequired
  };

  handleDelete = () => this.props.onDeleteHero(this.props.id);
  
  handleInfo = () => this.props.onGetInfo(this.props.id);

  handleAddToSquad = () => this.props.onAddToSquad(this.props.id);

  render() {

    const { name, additable, onDeleteHero, onGetInfo, onAddToSquad } = this.props;

    return (
          <div className={styles.hero}>
            <p className={styles.text}>{name}</p>

            <div className={styles.actions}>
              {additable && <Icon onClick={this.handleAddToSquad} src={addUserIcon}/>}
              {additable ? 
                <Icon onClick={this.handleDelete} src={deleteIconX}/> :
                <Icon onClick={this.handleDelete} src={deleteIcon} />
              }
              <Icon onClick={this.handleInfo} src={infoIcon}/>
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
