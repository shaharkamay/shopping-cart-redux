import React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToCart, adjustQty } from '../../../redux/shopping/shopping-actions';
import { ItemType } from '../../../types/item'

const item = ({ itemData, addToCart }: { itemData: ItemType, addToCart: (id: string) => void }) => {
  return (
    <div className='item'>
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
        {/* <Link to={`/item/${itemData.id}`}>
          <button
            onClick={() => loadCurrentItem(itemData)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link> */}
        <button
          onClick={() => {
            addToCart(itemData.id);
            adjustQty(itemData.id);
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addToCart: (id: string) => dispatch(addToCart(id)),
    adjustQty: (id: string) => dispatch(adjustQty(id)),
  }
}

export default connect(null, mapDispatchToProps)(item);
