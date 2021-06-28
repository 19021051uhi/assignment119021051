
import {render} from '@testing-library/react'
import FouroFourComponent from './PageNotFound';
import React from 'react'
window.React = React


test('Should render 404 not found page', () => {
    const { container } = render(<FouroFourComponent/>)
    expect(container.getElementsByClassName('four04').length).toBe(1);
})
