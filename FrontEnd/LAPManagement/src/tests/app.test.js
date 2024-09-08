import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../App';

jest.mock('../DropDown', () => ({
  DropDown: ({
    text,
    handleSelectedDropDown,
    handleSelectedOption,
    handleTableClassName,
  }) => (
    <button
      onClick={() => {
        handleSelectedDropDown(text);
        handleSelectedOption('Agregar');
        handleTableClassName('visible');
      }}
    >
      {text}
    </button>
  ),
}));

jest.mock('../Table', () => ({
  Table: ({ handleTableClassName, handleObject }) => (
    <div>
      <button
        onClick={() => {
          handleTableClassName('notVisible');
          handleObject({ id: 1, name: 'Item' });
        }}
      >
        Table Button
      </button>
    </div>
  ),
}));

jest.mock('../FormProduct', () => ({
  FormProduct: () => <div>FormProduct Component</div>,
}));

jest.mock('../FormCategory', () => ({
  FormCategory: () => <div>FormCategory Component</div>,
}));

jest.mock('../FormEditCategory', () => ({
  FormEditCategory: ({ category }) => (
    <div>FormEditCategory Component - {JSON.stringify(category)}</div>
  ),
}));

jest.mock('../FormEditProduct', () => ({
  FormEditProduct: ({ product }) => (
    <div>FormEditProduct Component - {JSON.stringify(product)}</div>
  ),
}));

describe('App Component', () => {
  test('renders DropDown components and handles click events', () => {
    render(<App />);

    expect(screen.getByText('Categorias')).toBeInTheDocument();
    expect(screen.getByText('Productos')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Productos'));

    expect(screen.getByText('FormProduct Component')).toBeInTheDocument();
  });

  test('shows FormCategory when "Agregar" is selected in "Categorias"', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Categorias'));

    expect(screen.getByText('FormCategory Component')).toBeInTheDocument();
  });
});
