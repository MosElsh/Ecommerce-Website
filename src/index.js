import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './css/base.css'
import './css/check-box.css';
import './css/errors.css';
import './css/out-of-stock.css';
import './css/selected-filter.css';
import './css/product-card.css';
import './css/header.css';
import './css/basket.css';
import './css/login.css';
import './css/product-list.css';
import './css/product-details.css';
import './css/footer.css';
import './css/mobile.css';
import './css/checkout.css';
import { Page } from './components/page';
import { ProductList } from './components/productList';
import { ProductDetails } from './components/productDetails';
import { MainBasket } from './components/basket';
import Watchlist from './components/watchlist';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<Page />}>
                <Route exact path='/products' element={<ProductList />} />
                <Route exact path='/products/:typeFilter' element={<ProductList />} />
                <Route exact path='/product/:prodID' element={<ProductDetails />} />
                <Route exact path='/basket' element={<MainBasket />} />
                <Route exact path='/watchlist' element={<Watchlist />} />
                <Route exact path='*' element={<main><h1>404 Error</h1><p>Click on one of the links above or below to head back to a page.</p></main>} />
            </Route>
        </Routes>
    )
}

const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);