// Example script for about page to demonstrate Firebase connection
document.addEventListener('DOMContentLoaded', () => {
  const db = firebase.database();

  // Example: Write about info to Firebase Realtime Database
  db.ref('about/info').set({
    mission: "To deliver compassionate and quality healthcare to all patients.",
    vision: "To be a leading hospital recognized for excellence and innovation.",
    values: "Integrity, Compassion, Excellence, and Teamwork.",
    timestamp: Date.now()
  }).then(() => {
    console.log('About info saved to Firebase.');
  }).catch((error) => {
    console.error('Error saving about info:', error);
  });
});
