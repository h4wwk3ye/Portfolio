import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import User from './components/User/User';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

// Authentication
import { useRecoilState } from 'recoil';
import { authState } from './atoms';
import setAuthToken from './utils/setAuthToken';
import getUserFromToken from './services/getUserFromToken';

export default function App() {
  const [auth, setAuth] = useRecoilState(authState);

  if (localStorage.getItem('token')) {
    // redirection is also handled in register an login

    (async () => {
      const token = localStorage.getItem('token');
      setAuthToken(token);
      const user = await getUserFromToken();

      setAuth({
        ...auth,
        token,
        isAuthenticated: true,
        user,
      });
    })();
  }

  return (
    <Switch>
      <Route exact path='/user' render={props => <User {...props} />} />
      <Route exact path='/register' render={props => <Register {...props} />} />
      <Route exact path='/login' render={props => <Login {...props} />} />
      <Redirect to='/user' />
    </Switch>
  );
}
