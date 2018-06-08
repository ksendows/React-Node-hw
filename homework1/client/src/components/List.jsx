import React from 'react';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Squad from './Squad';
import styles from './List.css';

const List = ({ data, name, ...props }) => (
  <ul className={styles.list}>
    {data.map(item => (
      <li key={item.id} className={styles.item}>
        {name==="hero" ? 
          <Hero {...item} {...props} /> : 
          <Squad {...item} {...props} />}
      </li>
    ))}
  </ul>
);


List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  name: PropTypes.oneOf(['hero', 'squad']).isRequired,
};

export default List;
