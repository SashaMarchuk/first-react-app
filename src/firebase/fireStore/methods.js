import { collection, getDocs } from 'firebase/firestore/lite';
import { db as dataBase } from './fireStore';

const getContainers = async (db = dataBase) => {
  const containersCol = collection(db, 'containers');
  const containersSnapshot = await getDocs(containersCol);
  const containersList = containersSnapshot.docs.map((doc) => doc.data());
  return containersList;
};

export { getContainers };
