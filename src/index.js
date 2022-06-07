import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './components/reportWebVitals';
import '../src/components/index.css';

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );


  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
       console.log('ServiceWorker registration successful with scope:',  registration.scope);
     }).catch(function(error) {
        console.log('ServiceWorker registration failed:', error);
   });
  }

    // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();


reportWebVitals();