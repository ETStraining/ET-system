import notificationModel from '../models/notificationModel.js';

class notificationController {
  static async addNotification(title, message) {
    const newNotification = new notificationModel(
      Date.now(),
      title,
      message,
      new Date()
    );
    
    // In a real application, you would save this to a database here
    console.log('New notification:', newNotification);
    
    // For demonstration purposes, we'll just log the notification
    return newNotification;
  }
  
  static async getNotifications() {
    // In a real application, you would fetch from a database here
    const notifications = [
      new notificationModel(1, 'Expense Alert', 'Your daily budget has been exceeded!', new Date()),
      new notificationModel(2, 'Low Balance', 'Your account balance is low.', new Date())
    ];
    return notifications;
  }
}

module.exports = notificationController;
