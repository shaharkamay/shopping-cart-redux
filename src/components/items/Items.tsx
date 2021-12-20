import React from 'react'
import './items.scss';
import { ItemType } from '../../types/item';

import { connect } from 'react-redux';

import Item from './item/item';
import { CartType } from '../../types/cart';

const Items = ({ items }: { items: ItemType[] }) => {
  return (
    <div>
      {items.map(item => <Item key={item.id} itemData={item} />)}

    </div>
  )
}

const mapStateToProps = (state: { shop: { items: ItemType[], cart: CartType[], currentItem: null | ItemType } }) => {
  return {
    items: state.shop.items
  }
}

export default connect(mapStateToProps)(Items);
