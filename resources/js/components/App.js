import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-light">
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
