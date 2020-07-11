import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { RecoilRoot } from 'recoil';
import Theme from './Theme';

ReactDOM.render(
  <RecoilRoot>
    <Router>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Router>
  </RecoilRoot>,
  document.getElementById('root')
);
