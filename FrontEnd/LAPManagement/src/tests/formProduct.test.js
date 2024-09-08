import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsService from '../services/productsService';
import { FormProduct } from '../FormProduct';

jest.mock('../services/productsService');

test('renders FormProduct and adds new product', () => {
  ProductsService.addProduct.mockResolvedValueOnce({});
  render(<FormProduct />);

  const barcodeInput = screen.getByPlaceholderText('Codigo de barras');
  const detailInput = screen.getByPlaceholderText('Nombre producto');
  const button = screen.getByText('Agregar');

  fireEvent.change(barcodeInput, { target: { value: '12345' } });
  fireEvent.change(detailInput, { target: { value: 'Producto' } });
  fireEvent.click(button);

  expect(ProductsService.addProduct).toHaveBeenCalledWith(expect.objectContaining({
    barcode: '12345',
    detail: 'Producto',
  }));
});
