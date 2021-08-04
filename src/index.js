import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import store from './store'
import {Provider} from 'react-redux' //import redux

// store.dispatch({type:"Inc"})

ReactDOM.render(

    <Provider className="pro" store={store}>
      index
      
      <App />

      index
      </Provider>
    ,document.getElementById('root')
  
  );