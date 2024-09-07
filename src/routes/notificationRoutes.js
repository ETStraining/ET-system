const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

router.post('/add', async (req, res) => {
  try {
    const { title, message } = req.body;
    const newNotification = await NotificationController.addNotification(title, message);
    res.status(201).json({ success: true, data: newNotification });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const notifications = await NotificationController.getNotifications();
    res.status(200).json({ success: true, data: notifications });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
