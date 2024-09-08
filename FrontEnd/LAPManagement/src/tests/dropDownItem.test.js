import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropDownItem } from '../DropDownItem';

test('renders DropDownItem and handles click', () => {
  const handleSelectedOption = jest.fn();
  render(
    <DropDownItem 
      text="Agregar" 
      itemClass="dropDown-item" 
      handleSelectedOption={handleSelectedOption} 
    />
  );

  const button = screen.getByText('Agregar');
  fireEvent.click(button);

  expect(handleSelectedOption).toHaveBeenCalledWith('Agregar');
});
