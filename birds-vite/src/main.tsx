import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import ApiProvider from './providers/ApiProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApiProvider>
			<App />
		</ApiProvider>
	</StrictMode>
);
