import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'remixicon/fonts/remixicon.css';
import App from './App.jsx';
import { QueryProviders } from './providers/QueryProviders'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryProviders>
      <App />
    </QueryProviders>
  </StrictMode>
);