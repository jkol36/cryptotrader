export const eliminateDuplicates = (array) => {
  let obj = {}
  let out = []
  for(let i=0; i<array.length; i++) {
    obj[array[i]] = 0
  }
  for (let x in obj) {
    out.push(x)
  }
  return out
}

export const calculatePercentageDone = (array, item) => {
  let x = array.indexOf(item)
  let y = x+1
  return y/array.length
}

export const binanceFeeLookup = {
  BNB: 1,
  BTC: 0.001,
  ETH:0.001,
  LTC:0.01,
  NEO: 0,
  QTUM: 0.01,
  SNT: 10,
  BNT: 1.2,
  EOS: 0.7,
  BCC: 0.0005,
  GAS: 0,
  USDT: 50,
  OAX: 6,
  DNT: 60,
  MCO: 0.3,
  ICN: 2,
  WTC: 0.4,
  OMG:0.3,
  ZRX: 10
  STRAT: 0.1,
  SNGLS: 20,
  BQX:2,
  KNC:2,
  FUN:80,
  SNM:20,
  LINK:10,
  XVG:0.1,
  CTR:7,
  SALT:0.4,
  IOTA:0.5,
  MDA:2,
  MTL:0.5,
  SUB:4,
  ETC:0.01,
  MTH:35,
  ENG:5,
  AST:10,
  DASH: 0.002,
  EVX:2.5,
  REQ:15,
  LRC:12,
  VIB:20,
  HSR:0.0001,
  TRX:30,
  POWR:5,
  ARK:0.1,
  YOYO:10,
  XRP:0.25,
  MODE:2,
  ENJ:80,
  STORJ:3,
  VEN:5,
  KMD:1,
  NULS:4,
  RCN:20,
  RDN:0.3,
  XMR:0.04,
  DLT:15,
  AMB:10,
  BAT:15,
  ZEC:0.005,
  BCPT:14,
  ARN:7,
  GVT:0.5,
  CDT:35,
  GXS:0.3,
  POE:50,
  QSP:30,
  BTS:1,
  XZC:0.02,
  LSK:0.1,
  TNT:35,
  FUEL:60,
  MANA:30,
  BCD:0.005,
  DGD:0.03,
  ADX:2,
  ADA:1,
  PPT:0.1,
  CMT:15,
  XLM:0.01,
  CND:180,
  LEND:50,
  WABI:4,
  TNB:70,
  WAVES:0.002,
  ICX:1.5,
  GTO:30,
  OST:15,
  ELF:2,
  AION:1,
  NEBL:0.01,
  BRD:3,
  EDO:1.5,
  WINGS:3,
  NAV:0.2,
  LUN:0.3,
  TRIG:5,
  APPC:20

}

