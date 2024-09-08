import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsService from '../services/productsService';
import { FormEditProduct } from '../FormEditProduct';

jest.mock('../services/productsService');

test('renders FormEditProduct and edits product', () => {
  const product = [1, '12345', 1, 'Producto', 10, 100];
  ProductsService.editProduct.mockResolvedValueOnce({});
  render(<FormEditProduct product={product} />);

  const input = screen.getByPlaceholderText('Producto');
  const button = screen.getByText('Editar');

  fireEvent.change(input, { target: { value: 'Producto Editado' } });
  fireEvent.click(button);

  expect(ProductsService.editProduct).toHaveBeenCalledWith(1, expect.objectContaining({ detail: 'Producto Editado' }));
});
