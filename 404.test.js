
import {render} from '@testing-library/react'
import FouroFourComponent from './PageNotFound';
import React from 'react'
window.React = React

// function tradePage() {
//     setTimeout(function() {
//       window.location.pathname = document
//         .getElementById('button')
//         .getAttribute('new-page');
//     }, 100);
//   }

    function openURL(){
        window.location ="https://i-want-to-study-engineering.org/q/dummy"
    }

    // test('Should render 404 not found page', () => {
    //     jest.useFakeTimers();
    //     openURL()
    //     jest.runAllTimers();
    //     expect(document.getElementsByClassName('center-block  m-b-3  four04').length).toBe(1);



    //   });

      test('Should render 404 not found page', () => {
        const { container } = render(<FouroFourComponent/>)
    
        // expect(container.firstChild).toHaveClass('four04') 
        expect(container.getElementsByClassName('four04').length).toBe(1);
    })



    
//   test('should change page when button is clicked', () => {
//     var button = document.querySelector('#button');
  
//     jest.useFakeTimers();
//     button.dispatchEvent(createEvent('click'));
//     jest.runAllTimers();
  
//     expect(global.window.location.pathname).toEqual('/new-url');
//   });