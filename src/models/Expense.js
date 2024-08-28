import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: String,
  description: String,
  amount: Number,
  date: Date
});

export default mongoose.model('Expense', expenseSchema);
