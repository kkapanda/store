import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AddItem } from '../pages';
import ShopHeader from '../store-header'

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/add-item" component={AddItem} />
            </Switch>
        </main>

    )
}

export default App;