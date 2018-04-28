import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Route, Switch, BrowserRouter, browserHistory} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import StationLog from './components/stationLog/Index';


import reducer from './reducers/index';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route exact path="/" component={StationLog}/>
                <Route path="/stationLog" component={StationLog}/>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
