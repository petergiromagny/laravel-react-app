import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import NewHome from "./NewHome";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-light">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/new-home' component={NewHome} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
