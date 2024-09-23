import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import "./index.css"
import Home from "./Practise/Home";



ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <BrowserRouter>
                <Home/>
              <App />
             </BrowserRouter>
        </Provider>
                  
);
