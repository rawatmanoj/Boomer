import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../components/Home/Home';
import FourColGrid from '../elements/FourColGrid/FourColGrid';

const App = () => {
    return (
        <BrowserRouter>
           <React.Fragment>
           
             <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/search-results" component={FourColGrid}/>
             </Switch>
           </React.Fragment>
        </BrowserRouter>
    );
};

export default App;