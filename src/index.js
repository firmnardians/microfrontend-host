import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import './assets/index.css';

const rootElement = document.getElementById('ZEUS');
const root = createRoot(rootElement);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</React.StrictMode>
);
