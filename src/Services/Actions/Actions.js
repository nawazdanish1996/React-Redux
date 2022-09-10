import { ADD_TO_CART } from "../Contants";

export const addToCart = (data) => {
  return {
      type: ADD_TO_CART,
      data: data
  }
}

export const removeToCart = (data) => {
  return {
      type: "REMOVE_TO_CART",
      data: data
  }
}
