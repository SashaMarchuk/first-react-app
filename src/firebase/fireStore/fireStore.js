import { getFirestore } from 'firebase/firestore/lite';
import { firebase } from '../index';

const db = getFirestore(firebase);

export { db };
