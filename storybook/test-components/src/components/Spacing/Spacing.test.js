import { render, screen } from '@testing-library/react';
import Spacing from './Spacing';

test('render <hr /> element', () => {
    render(<Spacing className="spacing-xxxl"/>);

    const spacingElement = document.querySelector('hr');

    console.log(spacingElement)
})