import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.css';

const Info = ({ stats }) => (
        <div>
            <p className={styles.info}>Strength: {stats.strength}</p>
            <p className={styles.info}>Intelligence: {stats.intelligence}</p>
            <p className={styles.info}>Speed: {stats.speed}</p>
        </div>
);

Info.propTypes = {
    stats: PropTypes.shape({
        strength: PropTypes.number.isRequired,
        intelligence: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired,
    }).isRequired,
};

export default Info;

