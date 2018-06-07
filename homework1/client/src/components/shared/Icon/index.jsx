import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Icon = ({ src, onClick }) => (
    <div className={styles.icon} onClick={onClick} role="presentation">
      <img src={src} className={styles.icon} alt="icon"/>
    </div>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Icon;
