import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import reducers from '../redux/store';
import middlewareSaga from './saga';

let reduxDevtoolsExtension;
if (process.env.NODE_ENV !== 'production') {
    reduxDevtoolsExtension = require('redux-devtools-extension');
}

const logger = createLogger({
    collapsed: true,
});

export default createStore(
    combineReducers({
        ...reducers,
    }),
    process.env.NODE_ENV !== 'production' ?
        reduxDevtoolsExtension.composeWithDevTools(applyMiddleware(...middlewareSaga, logger)) :
        applyMiddleware(...middlewareSaga)
);
