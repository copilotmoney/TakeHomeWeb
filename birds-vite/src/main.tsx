import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import ApiProvider from './providers/ApiProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider>
      <div className="flex flex-col items-center justify-center h-screen bg-background text-text p-4">
        <App />
      </div>
    </ApiProvider>
  </StrictMode>
);
