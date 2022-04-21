import React from 'react';
import ReactDOM from 'react-dom';
import App from './ReactApp';
import {Provider} from 'react-redux'
import store from './redux/store'
import swal from 'sweetalert';


if (document.getElementById('app')) {
ReactDOM.render(
  <Provider store={store()}>
    <App/>
  </Provider>,
  document.getElementById('app'),
);
}


