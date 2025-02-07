import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import ShopContextProvider from './context/Shopcontext.jsx'
import CartContextProvider from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopContextProvider>
      <CartContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
      </CartContextProvider>
    </ShopContextProvider>
  </StrictMode>,
)
