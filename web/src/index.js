import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import StationLog from './components/stationLog/Index';
import WriteGrowthLog from './components/writeGrowthLog/Index'
import Login from './components/login/Login'


import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <App>
                    <Route path="/stationLog" component={StationLog}/>
                    <Route path="/writeGrowthLog" component={WriteGrowthLog}/>
                    <Route path="/login" component={Login}/>
                </App>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
