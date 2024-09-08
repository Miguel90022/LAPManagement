import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesService from '../services/categoriesService';
import { FormCategory } from '../FormCategory';

jest.mock('../services/categoriesService');

test('renders FormCategory and adds new category', () => {
  CategoriesService.addCategory.mockResolvedValueOnce({});
  render(<FormCategory />);

  const input = screen.getByPlaceholderText('Nombre categoria');
  const button = screen.getByText('Agregar');

  fireEvent.change(input, { target: { value: 'Nueva Categoria' } });
  fireEvent.click(button);

  expect(CategoriesService.addCategory).toHaveBeenCalledWith({ detail: 'Nueva Categoria' });
});
