import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk),

			window.devToolsExtension ? window.devToolsExtension() :
			(f) => f
	)
);
// const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
