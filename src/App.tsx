import './App.scss';
import AppRoutes from './AppRoutes';
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from './utils/firebase/firebase-config'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';

function App() {
  const userCollectionRef = collection(db, "users");
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
    }
    getUsers();
  }, []);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppRoutes />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
