import * as C from './constants'

//this adds a trade to redux and the database
export const addTrade = (trade) => dispatch => {
  return Promise.resolve(dispatch({
    type: C.TRADE_ADDED,
    trade
  }))
}
//this is called when trades will be loaded from the database
export const initialTrades = (trades) => dispatch => {
  dispatch({
    type: C.INITIAL_TRADES,
    trades
  })

}