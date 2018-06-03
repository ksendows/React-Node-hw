import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Panel.css';

class Panel extends Component {
static propTypes = {
    title: PropTypes.string.isRequired,
    // onFilterChange: PropTypes.func.isRequired,
};

    render() {
        const { title } = this.props;

        return (
            <div className={styles.panel}>
                <h2 className={styles.title}>{title}</h2>
            </div>
        );
    }
}

export default Panel;
