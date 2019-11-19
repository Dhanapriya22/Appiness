import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

//import pages
import { LoginPage } from '../LoginPage';

class RouterComponent extends React.Component {

    render(){
        return(
            <Router>
                <Switch>
                    <Route 
                        path="/login" 
                        Component={LoginPage}
                    />
                </Switch>
            </Router>
        )
    }
}
export default RouterComponent;