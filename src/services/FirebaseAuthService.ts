import firebase from '../config/firebase';
import { signInWithPopup, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';

const { auth, provider } = firebase;

const loginUser = () => {
  return signInWithPopup(auth, provider);
};

const logoutUser = () => {
  return auth.signOut();
};

const subscribeToAuthChanges = (handleAuthChange: any) => {
  onAuthStateChanged(auth, user => {
    console.log(user);
    handleAuthChange(user);
  });
};

const FirebaseAuthService = {
  loginUser,
  logoutUser,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
