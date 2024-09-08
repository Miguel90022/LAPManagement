import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoriesService from '../services/categoriesService';
import { FormEditCategory } from '../FormEditCategory';

jest.mock('../services/categoriesService');

test('renders FormEditCategory and edits category', () => {
  const category = [1, 'Categoria'];
  CategoriesService.editCategory.mockResolvedValueOnce({});
  render(<FormEditCategory category={category} />);

  const input = screen.getByPlaceholderText('Categoria');
  const button = screen.getByText('Editar');

  fireEvent.change(input, { target: { value: 'Categoria Editada' } });
  fireEvent.click(button);

  expect(CategoriesService.editCategory).toHaveBeenCalledWith(1, { detail: 'Categoria Editada' });
});
