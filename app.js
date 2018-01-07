require('./config')
import { 
  getBinanceBalances,
  initializeBinance,
  getBinancePrice,
  getBitcoinUSDValueBinance,
  getBitcoinUSDValuePoloniex,
  getEthereumUSDValuePoloniex,
  getEthereumUSDValueBinance
} from './helpers'
import chalk from 'chalk'

let bitcoinUSDValPoloniex 
let bitcoinUSDValBinance
let ethereumUSDValPoloniex
let ethereumUSDValBinance
let lastDiffBTC = 0
let lastDiffEth = 0
const runInitial = () => {
  return Promise.all([
    getBitcoinUSDValueBinance(),
    getBitcoinUSDValuePoloniex(),
    getEthereumUSDValuePoloniex(),
    getEthereumUSDValueBinance()
  ]).spread((binanceBTC, poloniexBTC, ethPoloniex, ethBinance) => {
    bitcoinUSDValBinance = binanceBTC
    bitcoinUSDValPoloniex = poloniexBTC
    ethereumUSDValPoloniex = ethPoloniex
    ethereumUSDValBinance = ethBinance

  })
  .then(() => {
    let diffBTC = bitcoinUSDValBinance > bitcoinUSDValPoloniex ? bitcoinUSDValBinance - bitcoinUSDValPoloniex: bitcoinUSDValPoloniex - bitcoinUSDValBinance
    let diffETH = ethereumUSDValBinance > ethereumUSDValPoloniex ? ethereumUSDValBinance - ethereumUSDValPoloniex: ethereumUSDValPoloniex - ethereumUSDValBinance
    // if(diffBTC > lastDiffBTC) {
    //   console.log(chalk.yellow('poloniex bitcoin price:'), chalk.cyan(bitcoinUSDValPoloniex))
    //   console.log('------------------------------------------')
    //   console.log(chalk.yellow('binance bitcoin price:'), chalk.cyan(bitcoinUSDValBinance))
    //   console.log('------------------------------------------')
    //   console.log(chalk.yellow('bitcoin price difference:'), chalk.green(bitcoinUSDValBinance > bitcoinUSDValPoloniex ? bitcoinUSDValBinance - bitcoinUSDValPoloniex: bitcoinUSDValPoloniex - bitcoinUSDValBinance))
    //   console.log('------------------------------------------')
    //   lastDiffBTC = diffBTC
    // }
    if(diffETH > lastDiffEth) {
      console.log(chalk.yellow('poloniex ethereum price:'), chalk.cyan(ethereumUSDValPoloniex))
      console.log('------------------------------------------')
      console.log(chalk.yellow('binance ethereum price:'), chalk.cyan(ethereumUSDValBinance))
      console.log('--------------------------------------')
      console.log(chalk.yellow('ethereum price difference:'), chalk.green(ethereumUSDValBinance > ethereumUSDValPoloniex ? ethereumUSDValBinance - ethereumUSDValPoloniex: ethereumUSDValPoloniex - ethereumUSDValBinance))
      console.log('-----------------------------------------------------')
      diffETH = lastDiffEth
    }
  })
}

setInterval(runInitial, 2000)