import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar'; // Импортируем компонент NavBar
import AppRouter from './components/AppRouter';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar /> {/* Размещаем NavBar внутри BrowserRouter */}
			<AppRouter />
		</BrowserRouter>
	);
}

export default App;
