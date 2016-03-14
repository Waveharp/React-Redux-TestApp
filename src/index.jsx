import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import Voting from './components/Voting';


// point route to voting component
// specify App as root route
const routes = <Route component={App}>
	<Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
	<Router history={hashHistory}>{routes}</Router>,
	document.getElementById('app')
);
