import './commands';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import { attachCustomCommands } from 'cypress-firebase';
import firebaseAccount from '../../firebaseAccount.json';

const fbConfig = {
  apiKey: firebaseAccount.apiKey,
  authDomain: firebaseAccount.authDomain,
  projectId: firebaseAccount.projectId,
  storageBucket: firebaseAccount.storageBucket,
  messagingSenderId: firebaseAccount.messagingSenderId,
  appId: firebaseAccount.appId,
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });
