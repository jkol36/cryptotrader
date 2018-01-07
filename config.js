import mongoose from 'mongoose'
global.Promise = require('bluebird')
mongoose.Promise = require('bluebird')
require('./models')

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

export const cryptosToTrade = ['XVGBTC', 'ETHBTC', 'IOTABTC']
export const tradeTypeLookup = {
  1: 'BUY',
  2: 'SELL'
}
export const initializeDatabase = () => {
  return mongoose.connect(process.env.DATABASE_URL)
}

export const initializeTestDatabase = () => {
  return mongoose.connect(process.env.TEST_DATABASE_URL)
}

//IN USD
export const TRADE_THRESHOLD = 100
export const POLONIEX_BASE_FEE = 0.00010
