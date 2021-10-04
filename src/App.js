import React from 'react'
import {  Switch, Route ,BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import Main from "./Components/Main";
import { store } from './store';
import './App.css'
import DetailsPage from './Components/Main/DetailsPage';
import Login from './Components/LoginPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Switch>
       <Route exact path='/' component={Login} />
              <Route exact path='/menuPage' component={Main} />
              <Route exact path='/infoPage/:slug' component={DetailsPage} />
          </Switch>
          </Router>
    </Provider>
  );
}

export default App;
