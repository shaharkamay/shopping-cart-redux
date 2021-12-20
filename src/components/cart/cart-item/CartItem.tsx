import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { adjustQty } from '../../../redux/shopping/shopping-actions';
import { CartType } from '../../../types/cart'

const CartItem = ({ itemData, adjustQty }: { itemData: CartType, adjustQty: (id: string, qty: number) => void }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = ({ target }: { target: HTMLInputElement }) => {
    setInput(Number(target.value));
    adjustQty(itemData.id, Number(target.value));
  };

  return (
    <div className='cart-item'>
      <img
        src={itemData.img}
        alt={itemData.title}
      />
      <div>
        <p>{itemData.title}</p>
        <p>{itemData.description}</p>
        <p>$ {itemData.price}</p>
      </div>
      <div>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );

}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    adjustQty: (id: string, value: number) => dispatch(adjustQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);