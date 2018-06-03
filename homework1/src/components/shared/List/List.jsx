import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.jsx';
import styles from './List.css';

const List = ({ heroes, ...props }) => (
  <ul className={styles.list}>
    {heroes.map(hero => (
      <li key={hero.id} className={styles.item}>
        <Hero {...hero} {...props} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default List;
