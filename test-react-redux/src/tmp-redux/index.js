import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import TodoApp from './containers/TodoApp';
// import rootReducer from './reducers/rootReducers';

// const initialState = {}
// const store = createStore(rootReducer, initialState);
// const appRoot = (
//   <Provider store={store}>
//     <div>
//       <TodoApp />
//     </div>
//   </Provider>
// )
// ReactDOM.render(appRoot, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
