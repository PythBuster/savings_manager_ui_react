import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import i18next from 'i18next';
import App from './App';
import {I18nextProvider} from "react-i18next";
import enJSON from "./locale/en.json";
import deJSON from "./locale/de.json";

// Beispielhafte i18next-Konfiguration
i18next.init({
    interpolation: { escapeValue: false },  // React schon escapen lassen
    lng: 'en',  // Standard-Sprache
    resources: {
        en: {...enJSON},
        de: {...deJSON},
    },
    fallbackLng: 'en'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
  </StrictMode>
)
