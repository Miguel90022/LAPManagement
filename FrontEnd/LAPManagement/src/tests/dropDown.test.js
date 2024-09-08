import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropDown } from '../DropDown';

test('renders DropDown and toggles items', () => {
  const handleSelectedDropDown = jest.fn();
  const handleSelectedOption = jest.fn();
  render(
    <DropDown 
      text="Categorias" 
      handleSelectedDropDown={handleSelectedDropDown} 
      handleSelectedOption={handleSelectedOption} 
    />
  );

  const button = screen.getByText('Categorias');
  fireEvent.click(button);

  expect(handleSelectedDropDown).toHaveBeenCalledWith('Categorias');
  expect(handleSelectedOption).toHaveBeenCalledWith('');
});
