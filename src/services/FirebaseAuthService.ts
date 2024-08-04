import firebase from '../config/firebase';
import { signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';

const { auth, provider } = firebase;

const loginUser = () => signInWithPopup(auth, provider);

const logoutUser = () => auth.signOut();

// eslint-disable-next-line no-unused-vars
const subscribeToAuthChanges = (handleAuthChange: (u: User | null) => void) => {
  onAuthStateChanged(auth, user => {
    handleAuthChange(user);
  });
};

const FirebaseAuthService = {
  loginUser,
  logoutUser,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
