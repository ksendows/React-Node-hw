import React from 'react';
import PropTypes from 'prop-types';
import styles from './Info.css';

const Info = ({ stats }) => (
        <div>
            <p className={styles.info}>Strength: {stats.str}</p>
            <p className={styles.info}>Intelligence: {stats.int}</p>
            <p className={styles.info}>Speed: {stats.spd}</p>
        </div>
);

Info.propTypes = {
    stats: PropTypes.shape({
        str: PropTypes.number.isRequired,
        int: PropTypes.number.isRequired,
        spd: PropTypes.number.isRequired,
    }).isRequired,
};

export default Info;

