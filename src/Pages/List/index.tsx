import React, { Fragment, useContext } from 'react'
import CartSection from '../../Components/CardSection';
import { StoreContext } from '../../Utils/store';
import './styles.scss';

const ListPage = () => {

const store = useContext(StoreContext);

return(
  <Fragment> 
    <CartSection data={store.store} number={4} title={'Rare Comics!'}/>
    <CartSection data={store.store} number={8} title={'Lastest Releases'} />
    <CartSection data={store.store} number={4} title={'...Even more!'} />
  </Fragment>
)};

export default ListPage;