import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
//language
import './language/i18nextInit';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
// import "assets/third-party/apex-chart.css";

// project import
import { store } from './store';
import reportWebVitals from './reportWebVitals';

// import "./index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);

reportWebVitals();
