import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Panel = ({ title, content }) => (
        <div className={styles.panel}>
            <h2 className={styles.title}>{title}</h2>
            <div>{content}</div>
        </div>
    );

Panel.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.shape({}).isRequired
};


export default Panel;
