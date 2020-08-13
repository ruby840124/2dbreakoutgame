import React from 'react';
import home from './home';
import game from './game';
import setting from './setting';
import developer from './developer';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/game" component={game} />  
          <Route exact path="/setting" component={setting} />
          <Route exact path="/developer" component={developer} />
        </Switch>  
      </BrowserRouter>
    );
  }
}


export default App;
