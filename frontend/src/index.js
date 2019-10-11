import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { Switch, BrowserRouter as Router } from "react-router-dom";
import './style.css';

import App from './containers/App'
import reducers from './reducers';
import getRoutes from './routes/getRoutes'


const store = createStore(reducers, applyMiddleware(thunk,logger));

ReactDOM.render(<Provider store={store}>
                    <Router>
                        <Switch>
                            <div>
                            {getRoutes()}
                            </div>
                        </Switch>
                    </Router>
                </Provider>,
                document.querySelector('#root'));