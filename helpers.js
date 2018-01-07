require('dotenv').load()
import agent from 'superagent-bluebird-promise'
import binance from 'node-binance-api'
import { Client } from 'coinbase'
import chalk from 'chalk'
const poloniex = require('api-poloniex')(process.env.POLONIEX_API_KEY, process.env.POLONIEX_API_SECRET)
const coinbase = new Client({apiKey:process.env.COINBASE_API_KEY, apiSecret:process.env.COINBASE_API_SECRET})

export const initializeBinance = () => {
  return new Promise(resolve => {
    binance.options({
    'APIKEY':process.env.BINANCE_API_KEY,
    'APISECRET':process.env.BINANCE_API_SECRET
    })
    resolve()
  })
}
export const getBitcoinUSDValueBinance = () => {
  return new Promise((resolve, reject) => {
    binance.bookTickers(ticker => {
      resolve(+ticker['BTCUSDT'].bid)
    })
  })
}
export const getEthereumUSDValueBinance = () => {
  return new Promise((resolve, reject) => {
    binance.bookTickers(ticker => {
      resolve(+ticker['ETHUSDT'].bid)
    })
  })
}


export const getBitcoinUSDValuePoloniex = () => {
  return poloniex.public.returnTicker().then((res) => {
    return res.USDT_BTC.last
  })
}
export const getEthereumUSDValuePoloniex = () => {
  return poloniex.public.returnTicker().then((res) => {
    return res.USDT_ETH.last
  })
}
export const getBinancePrice = (symbol, usdValForBitcoin) => {
  return new Promise((resolve, reject) => {
    binance.bookTickers((ticker) => {
      if(symbol === 'BTC') {
        resolve(ticker[symbol+'USDT'].bid)
      }
      let bitcoinVal = ticker[symbol+'BTC'] ? ticker[symbol+'BTC'].bid: 0
      resolve(bitcoinVal * usdValForBitcoin)
    })
  })
}
export const getBinanceBalances = (usdValForBitcoin) => {
  let binanceBankRoll = 0
  return new Promise((resolve, reject) => {
    binance.balance(balances => {
      let keys = Object.keys(balances)
      return Promise.all(Promise.map(keys, key => {
        return getBinancePrice(key, usdValForBitcoin)
        .then(price => {
          if(balances[key].available > 0.00001) {
            binanceBankRoll += +price*balances[key].available 
          }
        })
      }))
      .then(() => resolve(binanceBankRoll))

    })
  })
}



