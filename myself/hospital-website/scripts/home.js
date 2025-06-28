// Example script for home page to demonstrate Firebase connection
document.addEventListener('DOMContentLoaded', () => {
  const db = firebase.database();

  // Example: Write a welcome message to Firebase Realtime Database
  db.ref('messages/welcome').set({
    text: "Welcome to Our Hospital Website!",
    timestamp: Date.now()
  }).then(() => {
    console.log('Welcome message saved to Firebase.');
  }).catch((error) => {
    console.error('Error saving welcome message:', error);
  });
});
