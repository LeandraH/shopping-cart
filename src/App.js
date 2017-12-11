import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from './reducer';
import logo from './logo.svg';

import './App.css';

const store = createStore(reducer, window && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <MuiThemeProvider>
                <div className="App">

                </div>
            </MuiThemeProvider>
        </Provider>
    );
  }
}

export default App;
