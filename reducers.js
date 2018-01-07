import * as C from './constants'

export const trades = (state=[], action) => {
  switch(action.type) {
    case C.INITIAL_TRADES:
      return action.trades
    case C.TRADE_ADDED:
      state = [...state, action.trade]
      return state
    default:
      return state
  }
}

export const lastBuyPrice = (state={}, action) => {
  switch(action.type) {
    case C.NEW_BUY_PRICE:
      state[action.symbol] = action.price
      return state
    default:
      return state
  }

}