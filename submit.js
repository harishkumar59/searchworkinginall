console.log("submit");


import { db } from './firebase-config.js';
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

// Reference the form
const form = document.getElementById('submit-tool-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Collect form data
  const toolData = {
    toolName: document.getElementById('toolName').value,
    category: document.getElementById('category').value,
    websiteUrl: document.getElementById('websiteUrl').value,
    shortDescription: document.getElementById('shortDescription').value,
    longDescription: document.getElementById('longDescription').value,
    pricingModel: document.getElementById('pricingModel').value,
    tags: document.getElementById('tags').value,
    contactEmail: document.getElementById('contactEmail').value,
  };

  try {
    // Add a new document in the "tools" collection
    const docRef = await addDoc(collection(db, "tools"), toolData);
    console.log("Document written with ID: ", docRef.id);
    alert('Tool submitted successfully!');
  } catch (e) {
    console.error("Error adding document: ", e);
    alert('Error submitting tool. Please try again.');
  }
});
