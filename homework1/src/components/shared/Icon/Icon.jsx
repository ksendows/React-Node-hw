import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.css';

const Icon = ({ src, onClick }) => {
  return (
    <a className={styles.icon} onClick={onClick}>
      <img src={src} className={styles.icon} alt="icon"/>
    </a>
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Icon;
