import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import Header from './components/header/header'

class App extends Component {
    constructor () {
        super();

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
            </div>
        );
    }

}

export default App;