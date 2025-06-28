// Script for contact page to handle form submission and save to Firebase
document.addEventListener('DOMContentLoaded', () => {
  const db = firebase.database();
  const form = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please fill in all fields.';
      formStatus.style.color = 'red';
      return;
    }

    const newMessageRef = db.ref('contactMessages').push();
    newMessageRef.set({
      name,
      email,
      message,
      timestamp: Date.now()
    }).then(() => {
