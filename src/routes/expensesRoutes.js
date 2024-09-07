import router from './router'; // Assuming you've named your router file as 'router.js'
import Expense from '../models/Expense';
import { authenticateToken } from '../middleware/autoMiddleware.js'; // Importing the authentication middleware

router.use(authenticateToken); // Applying authentication to all routes in this router

router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user.userId }).sort({ date: -1 });
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

export default router;
