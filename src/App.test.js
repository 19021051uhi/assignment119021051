import { render, screen } from '@testing-library/react';
import App from './App';
import AnswersSection from './AnswersSection';
import FouroFourComponent from './PageNotFound';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { fireEvent } from '@testing-library/react'
window.React = React

configure({adapter: new Adapter()});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Should render 404 not found page', () => {
    const { container } = render(<FouroFourComponent/>)
    expect(container.getElementsByClassName('four04').length).toBe(1);
})


test('Should print (correct message) when clicking on the correct answer', () => {


  const { container, getByTestId} = render(<AnswersSection />);

  const link = getByTestId('button-four');
  expect(link).toBeInTheDocument();

  fireEvent.click(link );
  expect(container.getElementsByClassName('correct-class').length).toBe(1);


  
});


test('Should print (wrong message) when clicking on the correct answer', () => {

  const { container, getByTestId} = render(<AnswersSection />);
  const link = getByTestId('button-one');
  expect(link).toBeInTheDocument();

  fireEvent.click(link );
  expect(container.getElementsByClassName('wrong-class').length).toBe(1);


  
});