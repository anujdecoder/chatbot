// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkFNDQFeigsTtciNEgE0LAfoliRdFB1Pw',
  authDomain: 'ava-chatbot-f2551.firebaseapp.com',
  projectId: 'ava-chatbot-f2551',
  storageBucket: 'ava-chatbot-f2551.appspot.com',
  messagingSenderId: '1061596681258',
  appId: '1:1061596681258:web:4dd215c773807241a61f53',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default {
  firebaseApp,
  auth,
};
