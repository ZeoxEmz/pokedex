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
