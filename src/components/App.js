import React, {useState} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './Menu';
import { Home, NewItem, SetUp, Inventory, About, FindFood } from './index';


export const App = () => {

  const localItems = localStorage.getItem('items');
    // passes the localStorage items to state. 
    const [items, setItems] = useState(JSON.parse(localItems));

  return (
    
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={() => <Home items={items}/>} />
        <Route path='/new' component={NewItem} />
        <Route path='/setup' component={SetUp} />
        <Route path='/inventory' component={ () => <Inventory items={items}/>} />
        <Route path='/about' component={About} />
        <Route path='/findfood' component={ () => <FindFood items={items} />} />
      </Switch>
    </HashRouter>
  );
}


