import { render, screen } from '@testing-library/react';
import App from './App';
import AnswersSection from './AnswersSection';
import QuestionsSection from './QuestionsSection';
import FouroFourComponent from './PageNotFound';
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { fireEvent } from '@testing-library/react'
import data from './data';
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


test('Should print (wrong message) when clicking on the wrong answer', () => {

  const { container, getByTestId} = render(<AnswersSection />);
  const link = getByTestId('button-one');
  expect(link).toBeInTheDocument();

  fireEvent.click(link );
  expect(container.getElementsByClassName('wrong-class').length).toBe(1);
  
});


test('Should show the correct question title in the heading', () => {

  render(<QuestionsSection />);
  const linkElement = screen.getByRole('heading', {name: /Balances/i});
  expect(linkElement).toBeInTheDocument();
  
});


test('Should get the correct `order of question` parameter', () => {
  
  const orderNo = data.balances.orderofquestions
  expect(orderNo).toEqual(99)
  
});