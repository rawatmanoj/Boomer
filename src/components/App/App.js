import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../components/Home/Home';
import Header from '../elements/header/header';

const App = () => {
    return (
        <BrowserRouter>
           <React.Fragment>
             <Header/>
             <Switch>
             <Route path="/" component={Home} exact />
             </Switch>
           </React.Fragment>
        </BrowserRouter>
    );
};

export default App;