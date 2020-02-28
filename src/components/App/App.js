import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../components/Home/Home';
import Song from '../../Song/Song';

const App = () => {
    return (
        <BrowserRouter>
           <React.Fragment>
           
             <Switch>
             <Route path="/" component={Home} exact />
             <Route path="/:songid" component={Song} exact />
             </Switch>
           </React.Fragment>
        </BrowserRouter>
    );
};

export default App;