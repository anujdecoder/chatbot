// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAkFNDQFeigsTtciNEgE0LAfoliRdFB1Pw',
  authDomain: 'ava-chatbot-f2551.firebaseapp.com',
  projectId: 'ava-chatbot-f2551',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export default {
  firebaseApp,
  auth,
  provider,
};
