import express from 'express';
const router = express.Router();
import reportController from '../controllers/reportController.js';

router.post('/daily', async (req, res) => {
  try {
    const dailyReport = await ReportController.generateDailyReport();
    res.status(201).json({ success: true, data: dailyReport });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post('/monthly', async (req, res) => {
  try {
    const monthlyReport = await ReportController.generateMonthlyReport();
    res.status(201).json({ success: true, data: monthlyReport });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
