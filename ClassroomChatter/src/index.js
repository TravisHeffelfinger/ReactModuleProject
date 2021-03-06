import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'

import App from './components/App'
import './styles/index.css'

import reducers from './Redux/reducers'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode> 
    </Provider>,
    document.querySelector('#root')
)