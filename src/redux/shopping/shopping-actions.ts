import { ItemType } from '../../types/item';
import * as actionTypes from './shopping-types';

export const addToCart = (itemId: string) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    }
  }
}

export const adjustQty = (itemId: string, value: number | null = null) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id: itemId,
      qty: value
    }
  }
}

export const loadCurrentItem = (item: ItemType) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  }
}

export const checkout = () => {
  return {
    type: actionTypes.CHECKOUT,
  }
}