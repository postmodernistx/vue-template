import {
  getFirestore,
} from 'firebase/firestore';

// Get the database
const firebaseDB = getFirestore();

export default {
  firebaseDB,
};
