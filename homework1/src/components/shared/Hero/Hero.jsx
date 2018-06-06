/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
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
    onDeleteHero: PropTypes.func,
    onDeleteHeroFromSquad: PropTypes.func,
    onGetInfo: PropTypes.func.isRequired
  };

  handleDelete = () => this.props.onDeleteHero(this.props.id);

  handleDeleteFromSquad = () => this.props.onDeleteHeroFromSquad(this.props.id);
  
  handleInfo = () => this.props.onGetInfo(this.props.id);

  handleAddToSquad = () => this.props.onAddToSquad(this.props.id);

  render() {

    const { name, additable } = this.props;

    return (
          <div className={styles.hero}>
            <p className={styles.text}>{name}</p>

            <div className={styles.actions}>
              {additable && <Icon onClick={this.handleAddToSquad} src={addUserIcon}/>}
              {additable ? 
                <Icon onClick={this.handleDelete} src={deleteIconX}/> :
                <Icon onClick={this.handleDeleteFromSquad} src={deleteIcon} />
              }
              <Icon onClick={this.handleInfo} src={infoIcon}/>
            </div>
          </div>
        );
  }
}
