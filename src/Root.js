import React from 'react';
import { Provider } from 'react-redux'
import store from './middlewares/store';
import saga from './redux/sagas';
import { sagaMiddleware } from './middlewares/saga';
import App from "./App";


const Root = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <App/>
            </div>
        </Provider>
    );
};
export default Root;

sagaMiddleware.run(saga);
