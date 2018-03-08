import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Index from "./components/Index";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <Route path='/index' component={Index}/>
            </Router>
        );
    }
}

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <RouterApp/>
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();


