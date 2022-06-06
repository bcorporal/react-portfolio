import * as serviceWorkerRegistration from './serviceWorkerRegistration';
export { default as About } from "./About"
export { default as Blog } from "./Blog"
export { default as Contact } from "./Contact"
export { default as Home } from "./Home"


ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();  


  // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();