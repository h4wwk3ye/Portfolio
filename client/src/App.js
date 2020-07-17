import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import User from './components/User/User';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import EditProfile from './components/EditProfile/EditProfile';
import PrivateRoute from './PrivateRoute';

// Authentication
import { useRecoilState } from 'recoil';
import { authState } from './atoms';
import setAuthToken from './utils/setAuthToken';
import getUserFromToken from './services/getUserFromToken';

ReactGA.initialize('UA-172930718-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  const [auth, setAuth] = useRecoilState(authState);

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      // redirection is also handled in register an login

      (async () => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
        const user = auth.user ? auth.user : await getUserFromToken();

        setAuth({
          ...auth,
          token,
          isAuthenticated: true,
          user,
        });
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route exact path='/user/:id' render={props => <User {...props} />} />
      <Route exact path='/register' render={props => <Register {...props} />} />
      <Route exact path='/login' render={props => <Login {...props} />} />
      <PrivateRoute exact path='/profile/me' component={User} />
      <PrivateRoute exact path='/edit' component={EditProfile} />
      {!auth.isAuthenticated ? (
        <Redirect to='/login' />
      ) : (
        <Redirect to='/edit' />
      )}
    </Switch>
  );
}
