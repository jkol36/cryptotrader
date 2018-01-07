import mongoose from 'mongoose'
import { 
  getBinanceBalances,
  initializeBinance,
  getBinancePrice,
  getBitcoinUSDValueBinance,
  getBitcoinUSDValuePoloniex
} from './helpers'
import { store } from './store'
import { addTrade } from './actions'
import { initializeTestDatabase } from './config'
import { binanceFeeLookup } from './utils'
require('dotenv').load()

// describe.only('fees', () => {
//   it('should calculate withdrawal fees for binance', done => {

//   })
// })
describe('poloniex', () => {
  it.only('should get bitcoin usd value for poloniex', done => {
    getBitcoinUSDValuePoloniex()
    .then(usdVal => {
      console.log(`usd val poloniex ${usdVal}`)
      expect(+usdVal).to.be.a('number')
      expect(usdVal).to.not.be.undefined
      done()
    })
  })
})
describe('binance', () => {
  let bitcoinUSDVal = 0
  it('should initialize binance', done => {
    initializeBinance()
    .then(() => done())
    .catch(done)
  })
  it('should get bitcoinUSD Value for binance exchange', done => {
    getBitcoinUSDValueBinance()
    .then(usd => {
      expect(usd).to.be.a('number')
      expect(usd).to.not.be.undefined
      bitcoinUSDVal = usd
      done()
    })
  })
  it('should get USDT price for symbol (binance)', done => {
    getBinancePrice('LTC', bitcoinUSDVal)
    .then(b => {
      console.log(b)
      expect(b).to.not.be.undefined
      done()

    })

  })
  it('should get crypto dollar amount in binance', done => {
    initializeBinance()
    .then(() => {
      getBinanceBalances(bitcoinUSDVal)
      .then(balance => {
        expect(balance).to.not.be.undefined
        console.log('binance balance', balance)
        done()
      })
    })
  })
})
describe('db', () => {
  it('should initialize test database', done => {
    initializeTestDatabase()
    .then(res => {
      expect(res).to.not.be.undefined
      trades.remove()
      .then(() => done())
    })
  })
  it('should get trades', done => {
    mongoose.model('trade').find({})
    .then(trades => {
      expect(trades).to.be.an.array
      expect(trades.length).to.eq(0)
      done()
    })
  })
  it('should create and save a trade', done => {
    let trade = {
      price:0.00001012,
      quantity: 100,
      name: 'XVGBTC',
      type: 1
    }
    mongoose.model('trade').create(trade)
    .then(res => res.save())
    .then(() => {
      mongoose.model(trades.find({}))
      .then(trades => {
        expect(trades).to.be.an.array
        expect(trades.length).to.eq(1)
        done()
      })
    })
  })
})
describe('store', () => {
  it('store should have an initial value of an empty array for trades', done => {
    let { trades } = store.getState()
    expect(trades).to.not.be.undefined
    expect(trades.length).to.eq(0)
    done()
  })

  it('should add a trade', done => {
    const { 
      dispatch,
      getState 
    } = store
    let trade = {
      price:0.00001012,
      quantity: 100,
      name: 'XVGBTC',
      type: 1
    }
    dispatch(addTrade(trade))
    .then(() => {
      console.log(getState().trades)
      expect(getState().trades.length).to.eq(1)
      done()
    })

  })
})
describe('prerequesites', () => {
  it('should get bitcoin usd price', done => {
    getBitcoinPriceUSD()
    .then(price => {
      expect(price).to.not.be.undefined
      console.log(price)
      done()
    })
    .catch(done)
  })
})