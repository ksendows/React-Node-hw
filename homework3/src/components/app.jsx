import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import ProfilePage from './pages/profile';
import AppBar from './app-bar';
import ProtectedRoute from './protected-route';

const styles = {
  app: {
    maxWidth: 1170,
    margin: '0 auto',
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
};

const App = ({ authenticated }) => (
  <div style={styles.app}>
    <AppBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <ProtectedRoute
        exact
        path="/dashboard"
        component={DashboardPage}
        redirectTo="/login"
        authenticated={authenticated}
      />
      <ProtectedRoute
        exact
        path="/profile"
        component={ProfilePage}
        redirectTo="/login"
        authenticated={authenticated}
      />
      <Redirect to="/" />
    </Switch>
  </div>
);

const mapState = state => ({
  authenticated: state.session.authenticated,
});


export default connect(
  mapState,
  null,
)(App);

