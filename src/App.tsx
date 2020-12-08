import React, { Fragment, useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Axios from 'axios';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './Components/NavBar';
import CheckoutPage from './Pages/Checkout';
import HomePage from './Pages/Home';
import ListPage from './Pages/List';

import { GlobalCartContext, LoadingContext, StoreContext } from './Utils/store';
import { CardItem } from './Utils/types';
import Loader from './Components/Loader';



function App() {

  const [loading, setLoading] = useState(false);
  const loadingState: any = {
    active: loading,
    toggle: () => setLoading(!loading),
    start: () => setLoading(true),
    stop: () => setLoading(false)
  };

  const [shop, setShop] = useState([]);
  const [cart, setCart] = useState<CardItem[]>([]);
  const [hidden, setHidden] = useState(false);

  const cartState = {
    items: cart,
    hidden: hidden,
    setHidden: () => setHidden(!hidden),
    addItem: (item: CardItem) => setCart([...cart, item]),
    clearItem: () => setCart([]),
  }

  const shopState = {
    store: shop
  }

  //Chamada API
  const timestamp = Math.floor(Date.now() / 1000);
  const publicKey = '68cbd2b57cd8332bb4a807d785f8a836'
  const hash = '9da3bed23de62d4d4b2d69e9e3369921'
  const url = `http://gateway.marvel.com/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`

  function Api() {
    loadingState.toggle();
    Axios({
      url: url
    }).then((response) => {
      const fetchedData = response.data.data.results.map((item: any, index: number) => {
        const data: CardItem = {
          id: index,
          name: item.title,
          price: item.prices[0].price,
          description: item.description ? (item.description) : '',
          quantity: 1,
        }
        return data;
      })
      setShop(fetchedData);
      loadingState.toggle();
    })
  };

  useEffect(() => {
    Api();
  },[]);

  return (
    <div className="App">
      <Router>
        <StoreContext.Provider value={shopState}>
          <GlobalCartContext.Provider value={cartState}>
            <LoadingContext.Provider value={loadingState}>
              <NavBar />
              <Switch>
                {
                  loading ? (<Loader />) : (
              <Fragment>    
                <Route exact path="/" component={HomePage} />
                <Route path="/checkout" component={CheckoutPage} />
                <Route path="/list" component={ListPage} />
              </Fragment>
                  )
                }

              </Switch>
            </LoadingContext.Provider>
          </GlobalCartContext.Provider>
        </StoreContext.Provider>
      </Router>
    </div>
  );
}

export default App;
