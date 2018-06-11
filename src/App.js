import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './toolbox/theme';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import Home from "./modules/Home";

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Home/>
            </ThemeProvider>
        );
    }
}

export default App;
