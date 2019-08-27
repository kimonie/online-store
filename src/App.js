import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'

class App extends Component {
    constructor () {
        super();

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                </Switch>
            </div>
        );
    }

}

export default App;