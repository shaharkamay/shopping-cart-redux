import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { checkout } from '../../redux/shopping/shopping-actions';
import { CartType } from '../../types/cart';
import CartItem from './cart-item/CartItem';

import './cart.scss';

const Cart = ({ cart, checkout }: { cart: CartType[], checkout: () => void }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price;
    })
    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalItems, totalPrice])
  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => <CartItem key={item.id} itemData={item} />)}
      <div className='cart-summery'>
        <h4>Cart Summery</h4>
        <span>TOTAL: ({totalItems} items)</span>
        <span>$ {totalPrice}.00</span>
      </div>
      <button onClick={() => checkout()}>
        Proceed To Checkout
      </button>
    </div>
  )
}

const mapStateToProps = (state: { shop: { cart: CartType[] } }) => {
  return {
    cart: state.shop.cart,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    checkout: () => dispatch(checkout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
