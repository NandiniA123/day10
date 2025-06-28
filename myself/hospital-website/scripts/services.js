// Example script for services page to demonstrate Firebase connection
document.addEventListener('DOMContentLoaded', () => {
  const db = firebase.database();

  // Example: Write a services info to Firebase Realtime Database
  db.ref('services/info').set({
    cardiology: "Heart health and treatment by expert cardiologists.",
    neurology: "Advanced neurological care and diagnostics.",
    pediatrics: "Compassionate care for children and adolescents.",
    timestamp: Date.now()
  }).then(() => {
    console.log('Services info saved to Firebase.');
  }).catch((error) => {
    console.error('Error saving services info:', error);
  });
});
