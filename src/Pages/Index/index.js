import React from 'react';
import Dashboard from '../Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function Index(){
	
    return (
        <Router>
            <div>
                <Switch>
                    <Redirect exact from="/" to="/dashboard" />
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    
}