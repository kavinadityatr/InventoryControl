import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListInventoryComponent from './components/ListInventoryComponent';
import CreateInventoryComponent from './components/CreateInventoryComponent';
import ViewInventoryComponent from './components/ViewInventoryComponent';
import UpdateInventoryComponent from './components/UpdateInventoryComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListInventoryComponent}></Route>
            <Route path="/inventory" component={ListInventoryComponent}></Route>
            <Route path="/add/:id" component={CreateInventoryComponent}></Route>
            <Route path="/edit/:id" component={UpdateInventoryComponent}></Route>
            <Route path="/view/:id" component={ViewInventoryComponent}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
