import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero';
import Squad from '../Squad/Squad';
import styles from './List.css';

const List = ({ data, name, ...props }) => (
  <ul className={styles.list}>
    {data.map(hero => (
      <li key={hero.id} className={styles.item}>
        {name==="hero" ? 
          <Hero {...hero} {...props} /> : 
          <Squad {...hero} {...props} />}
      </li>
    ))}
  </ul>
);


List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  name: PropTypes.string.isRequired
};

export default List;
