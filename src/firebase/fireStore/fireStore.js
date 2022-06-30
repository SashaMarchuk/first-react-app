import { getFirestore } from 'firebase/firestore/lite';
import { firebase } from '../index';
console.log('firebase: ', firebase);

const db = getFirestore(firebase);
console.log('db: ', db);

export { db };
