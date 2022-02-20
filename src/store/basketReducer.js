const defaultState = {
  basket: [],
  total: 0,
}

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, action.product] 
      }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter(product => product.id !== action.id) 
      }
    case "INCRIMENT_COUNT":
      return {
        ...state,
        basket: state.basket.map(elem => { 
          if (elem.id === action.productId) {
            elem.count += 1
            elem.allPrise = elem.prise * elem.count
          }
          return elem
        })
      }
    case "DECRIMENT_COUNT":
      return {
        ...state,
        basket: state.basket.map(elem => { 
          if (elem.id === action.productId) {
            elem.count -= 1
            elem.allPrise = elem.prise * elem.count
          }
          return elem
        })
      }
    case "CALC_TOTAL": 
      return {
        ...state,
        total: state.basket.map(elem => elem.allPrise).reduce((a, b) => parseInt(a) + parseInt(b))
      }
    default:
      return state
  }
}