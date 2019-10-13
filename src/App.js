import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import RecipePage from './components/RecipePage';


const App = () => {
    
    return (
        <div className="App">
            <HashRouter basename="/">
                <Switch>
                    <Route exact path = "/" component = {RecipePage}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
