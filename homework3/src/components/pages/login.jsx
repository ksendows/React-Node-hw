import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signUserIn } from '../../redux/actions';
import Button from '../button';
import withAuthCheck from '../../components/hoc/withAuthCheck';

const styles = {
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: 320,
    marginBottom: 16,
    padding: 4,
    fontSize: 18,
  },
  error: {
    padding: '5px',
    fontSize: '0.75rem',
    color: 'red',
  }
};

const INITIAL_STATE = { login: '', password: '' };

class LoginPage extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = e => {
    e.preventDefault();
    const { login, password } = this.state;

    if (login === '' || password === '') return;

    this.props.signUserIn({ ...this.state });
  };

  handleInputChange = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  render() {
    const { login, password } = this.state;

    return (
      <div style={styles.page}>
        <form onSubmit={this.onSubmit} style={styles.form}>
          <input
            type="text"
            name="login"
            style={styles.input}
            placeholder="Email"
            value={login}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            style={styles.input}
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
          />
          <div style={styles.error}>{this.props.error}</div>
          <Button text="Login" type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ error: state.session.error});
const mapDispatchToProps = { signUserIn };

export default compose(
  withAuthCheck,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPage);
