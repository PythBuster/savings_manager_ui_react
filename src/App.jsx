import './App.css'
import MoneyboxCard from "./components/MoneyboxCard.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'js-cookie';
import {useEffect, useState} from "react";

// Dark and Light Themes
const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    // Zustand für den Dark Mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Beim Laden der Komponente den gespeicherten Modus aus dem Cookie abrufen
    useEffect(() => {
        const savedMode = Cookies.get('theme');
        if (savedMode === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    // Funktion zum Umschalten des Modus
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);

        // Den neuen Modus im Cookie speichern
        Cookies.set('theme', newMode ? 'dark' : 'light', { expires: 365 });
    };

    return (
      <>
          <div>
              <h1>Meine MUI App</h1>
              <button onClick={toggleDarkMode}>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
              {/* Weitere Inhalte deiner App */}
          </div>

          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <MoneyboxCard name="Overflow Moneybox" priority="1" savingsAmountStr="25,70 €" savingsTargetStr="150,00 €" balanceStr="120,00 €" />
          </ThemeProvider>
      </>
  )
}

export default App
