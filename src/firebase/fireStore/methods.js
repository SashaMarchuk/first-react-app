import { collection, getDocs } from 'firebase/firestore/lite';
import { db as dataBase } from './fireStore';

const getContainers = async (db = dataBase) => {
  const containersCol = collection(db, 'containers');
  console.log('containersCol: ', containersCol);
  const containersSnapshot = await getDocs(containersCol);
  console.log('containersSnapshot: ', containersSnapshot);
  const containersList = containersSnapshot.docs.map((doc) => doc.data());
  return containersList;
};

export { getContainers };
