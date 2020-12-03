import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

test('Render Episodes Compnent', async () => {
	render(await (<Episodes />));
});
