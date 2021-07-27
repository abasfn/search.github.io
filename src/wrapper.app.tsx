import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { getuser } from './reduser';
import { LoadingReduser } from './reduser/lauding.reduser';

const WrapperApp = () => {
    const mainReudser = () => {
        const mindlever = applyMiddleware(thunk);
        const routreduser = combineReducers({
            getuser: getuser,
            LoadingReduser:LoadingReduser
        })
        const store = createStore(routreduser, mindlever)
        return store
    }
    return (
        <React.StrictMode>
            <Provider store={mainReudser()}>
                <App />
            </Provider>
        </React.StrictMode>
    );
};

export default WrapperApp;