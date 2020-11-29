import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './Menu';
import { Home, NewItemForm, SetUp, Inventory, About } from './index';

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/new' component={NewItemForm} />
        <Route path='/setup' component={SetUp} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/about' component={About} />
      </Switch>
    </HashRouter>
  );
}


