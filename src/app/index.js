import React from 'react';
import {render} from 'react-dom';
import App from './components/App'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/todoReducer'


let store = createStore(reducers);

class MainApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <App/>
            </Provider>
        );
    }
}

render(<MainApp />, window.document.getElementById('app'));
