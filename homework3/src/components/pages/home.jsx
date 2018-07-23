import React from 'react';

const styles = {
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
};

const Home = ( ) => (
  <h2 style={styles.title}>Welcome!</h2>
);

export default Home;
