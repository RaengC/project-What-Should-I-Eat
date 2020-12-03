import React, { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Menu } from './Menu';
import { Home, NewItem, SetUp, Inventory, About, FindFood, Edit } from './index';


export const App = () => {

  const localItems = localStorage.getItem('items');
    // passes the localStorage items to state. 
  const [items, setItems] = useState(JSON.parse(localItems));

    
  // useEffect(() => {
  //   const refresh = setInterval(() => {
  //     console.log("this will run every second")
  //   }, 1000);
  //   return () => clearInterval(refresh)
  // }, [])


  return (
    
    <HashRouter>
      <Menu />
      <Switch>
        <Route exact path='/' component={() => <Home items={items}/>} />
        <Route path='/new' component={() => <NewItem items={items} setItems={setItems}/>} />
        <Route path='/setup' component={SetUp} />
        <Route path='/inventory' component={ () => <Inventory items={items}/>}>
          {/* {items ? <Inventory /> : <Redirect to={'/setup'} />} */}
          </Route>
        <Route path='/about' component={About} />
        <Route path='/findfood' component={ () => <FindFood items={items} />} />
        <Route path='/edit/:id' component={Edit}/>
      </Switch>
    </HashRouter>
  );
}


