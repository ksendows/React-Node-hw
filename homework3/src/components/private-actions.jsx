import React, { Fragment } from 'react';
import Button from './button';

const styles = {
    avatar: {
        boxSizing: 'content-box',
        width: '32px',
        height: '32px',
        padding: '0 10px'
    }
};

const PrivateActions = ({ name, avatar, signUserOut, push }) => (
    <Fragment>
        <li>
            <Button
                text="Logout"
                onClick={async () => {
                    await signUserOut();
                    push('/');
                }}
            />
        </li>
        <li>
            <img src={avatar} alt="avatar" style={styles.avatar} />
        </li>
        <li>
            <div>{name}</div>
        </li>
    </Fragment>
);

export default PrivateActions;