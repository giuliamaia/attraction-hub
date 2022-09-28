import './App.scss';
import AppRoutes from './AppRoutes';
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from 'react';
import { db } from './utils/firebase/firebase-config'

function App() {
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
    }
    getUsers();
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;
