import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { signUserOut } from '../redux/actions';
import PrivateActions from './private-actions';

const styles = {
  list: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    display: 'block',
    padding: '8px',
    fontWeight: 500,
    textTransform: 'uppercase',
    fontSize: 20,
    textDecoration: 'none',
  },
  activeLink: { color: 'palevioletred' },
}


const AuthManager = ({ authenticated, ...props }) => (
  <ul style={styles.list}>
    {authenticated && <PrivateActions {...props} />}
  </ul>
);

const mapState = state => ({
  authenticated: state.session.authenticated,
  name: state.session.user.name,
  avatar: state.session.user.avatar
});

const mapDispatch = { push, signUserOut };


export default connect(
  mapState,
  mapDispatch,
)(AuthManager);


