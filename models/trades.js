import mongoose from 'mongoose'

const tradeSchema = new mongoose.Schema({
  price: Number,
  quantity:Number,
  name: String,
  type: Number
})

export default mongoose.model('trade', tradeSchema)