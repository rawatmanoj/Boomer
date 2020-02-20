import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../elements/Home/home';
import Header from '../elements/header/header'

const App = () => {
    return (
        <BrowserRouter>
           <React.Fragment>
             <Header/>
             <Switch>
               <Home/>
             </Switch>
           </React.Fragment>
        </BrowserRouter>
    );
};

export default App;