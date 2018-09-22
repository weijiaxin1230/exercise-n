import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import {Button} from 'antd-mobile';
import Main from './Main';
import Detail from "./detail";
class App extends Component {

    render() {
        return (
            <div>
               <Router>
                   <div>
                       <Route exact path='/' component={Main}></Route>
                       <Route exact path='/detail' component={Detail}></Route>
                   </div>
               </Router>
            </div>
        );
    }
}

export default App;
