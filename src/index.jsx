import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

// set up the store
// (TEMPORARY until we get real data) - dispatch SET_STATE action on it
const store = createStore(reducer);
store.dispatch({
	type: 'SET_STATE',
	state: {
		vote: {
			pair: ['Sunshine', '28 Days Later'],
			tally: {Sunshine: 2}
		}
	}
});

// point route to voting component
// specify App as root route
const routes = <Route component={App}>
	<Route path="/results" component={Results} />
	<Route path="/" component={Voting} />
</Route>;

// connect our component tree to Redux store with Provider
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>,
	</Provider>,
	document.getElementById('app')
);
