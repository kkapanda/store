import React from 'react';
import './app.css';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AddItem } from '../pages';
import ShopHeader from '../store-header'
import InfoTable from '../info-table';

const App = () => {
    return (
        <main role='main' className='container'>
            <ShopHeader />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/add-item" component={AddItem} />
            </Switch>
            <InfoTable />
        </main>

    )
}

export default App;