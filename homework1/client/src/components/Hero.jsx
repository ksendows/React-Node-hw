import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from './shared/Icon';
import infoIcon from './shared/Icon/icons/info.svg';
import deleteIconX from './shared/Icon/icons/delete_x.svg';
import addUserIcon from './shared/Icon/icons/add-user.svg';
import deleteIcon from './shared/Icon/icons/delete.svg';
import styles from './Hero.css';

export default class Hero extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    additable: PropTypes.bool.isRequired,
    onDeleteHero: PropTypes.func,
    onDeleteHeroFromSquad: PropTypes.func,
    onGetInfo: PropTypes.func.isRequired,
    onAddToSquad: PropTypes.func
  };

  static defaultProps = {
    onDeleteHero: () => {},
    onDeleteHeroFromSquad: () => {},
    onAddToSquad: () => { },
  };

  handleDelete = () => this.props.onDeleteHero(this.props.id, "heroes");

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
