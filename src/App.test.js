import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App Compnent', async () => {
	render(<App />);

	expect(screen.queryByText(/stranger things/i)).toBeNull;

	expect(await screen.findAllByText(/stranger things/i)).toBeInTheDocument;
});
