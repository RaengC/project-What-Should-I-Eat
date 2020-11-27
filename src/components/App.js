import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './Menu/Menu';
import { Home, NewItem, SetUp, Inventory, About } from './Pages/Pages';

export const App = () => {
  return (
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/new' component={NewItem} />
        <Route path='/setup' component={SetUp} />
        <Route path='/inventory' component={Inventory} />
        <Route path='/about' component={About} />
      </Switch>
    </HashRouter>
  );
}


