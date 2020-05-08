'use strict';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBH5UF-1Ak_wMV5VhauAG6jWrPgBPu2-AM",
    authDomain: "myfirebasechatapp-9318d.firebaseapp.com",
    databaseURL: "https://myfirebasechatapp-9318d.firebaseio.com",
    projectId: "myfirebasechatapp-9318d",
    storageBucket: "myfirebasechatapp-9318d.appspot.com",
    messagingSenderId: "899627362745",
    appId: "1:899627362745:web:66adedd466f615ec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const collection = db.collection('messages');

const message = document.getElementById('message');
const form = document.querySelector('form');
const messages = document.getElementById('messages');

collection.orderBy('created').get().then(snapshot => {
  snapshot.forEach(doc => {
    const li = document.createElement('li');
    li.textContent = doc.data().message;
    messages.appendChild(li);
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const val = message.value.trim();
  if (val === "") {
    return;
  }

  const li = document.createElement('li');
  li.textContent = val;
  messages.appendChild(li);

  message.value = '';
  message.focus();

  collection.add({
    message: val,
    created: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(doc => {
    console.log(`${doc.id} added!`);
  })
  .catch(error => {
    console.log(error);
  });
});

message.focus();
