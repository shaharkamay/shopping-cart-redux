import { ItemType } from "./item";

export interface Action {
  type: string,
  payload: ItemType & { qty: number }
}