console.log('Permissions-Policy:', document.currentScript ? document.currentScript.crossOrigin : null);
const currentScript = document.currentScript;
if (currentScript) {
  console.log('Permissions-Policy:', currentScript.crossOrigin);
} else {
  console.error('document.currentScript es null');
}
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import store from './redux/store.js'
import MainApp  from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
        <MainApp  />
    </BrowserRouter>
  </Provider>
)
