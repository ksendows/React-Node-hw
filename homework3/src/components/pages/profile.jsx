import React from 'react';

const styles = {
    title: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
};

const Profile = ( ) => (
    <h2 style={styles.title}>Profile page</h2>
);

export default Profile;
