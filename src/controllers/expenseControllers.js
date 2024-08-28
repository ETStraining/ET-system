import express from 'express';
import router from './router'; // Assuming you've named your router file as 'router.js'
import Expense from '../models/Expense';

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching expenses' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newExpense = new Expense({ ...req.body, userId: req.user.userId });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (err) {
    res.status(400).json({ message: 'Invalid request body' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (err) {
    res.status(500).json({ message: 'Error finding expense' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedExpense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(500).json({ message: 'Error updating expense' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting expense' });
  }
});

export default router;
