import React from 'react';
import { AddUserModal } from 'components/core/Modal/components/AddUser';
import { IAddUserDataModel, IAddUserModalOptions } from './types';
import { act, fireEvent, render } from '@testing-library/react';

describe('AddUserModal tests', () => {
    it('calls the onSubmit function', async () => {
        const mockSubmitHandler = jest.fn();

        const mockOptions: IAddUserModalOptions = {
            onAddUserHandler: (id: string, data: IAddUserDataModel) => mockSubmitHandler(id, data),
        };

        const { getByLabelText, getByRole } = render(<AddUserModal onClose={() => null} option={mockOptions} />);

        await act(async () => {
            fireEvent.change(getByLabelText('Фамилия'), { target: { value: 'Баяндин' } });
            fireEvent.change(getByLabelText('Имя'), { target: { value: 'Антон' } });
            fireEvent.change(getByLabelText('Отчество'), { target: { value: 'Викторович' } });
            fireEvent.change(getByLabelText('Место работы'), { target: { value: 'АБК-2' } });
            fireEvent.change(getByLabelText('Должность'), { target: { value: 'Директор' } });
            fireEvent.change(getByLabelText('Номер телефона'), { target: { value: '89824467190' } });
        });

        await act(async () => {
            fireEvent.click(getByRole('button'));
        });

        expect(mockSubmitHandler).toHaveBeenCalled();
    });
    it('with invalid fields', async () => {
        const mockSubmitHandler = jest.fn();

        const mockOptions: IAddUserModalOptions = {
            onAddUserHandler: (id: string, data: IAddUserDataModel) => mockSubmitHandler(id, data),
        };

        const { container, getByLabelText, getByRole } = render(
            <AddUserModal onClose={() => null} option={mockOptions} />,
        );

        await act(async () => {
            fireEvent.change(getByLabelText('Фамилия'), { target: { value: 'Баяндин' } });
            fireEvent.change(getByLabelText('Имя'), { target: { value: 'Антон' } });
            fireEvent.change(getByLabelText('Отчество'), { target: { value: 'Викторович' } });
            fireEvent.change(getByLabelText('Место работы'), { target: { value: 'АБК-2' } });
        });

        await act(async () => {
            fireEvent.click(getByRole('button'));
        });

        expect(container.getElementsByClassName('text-box__error').length).toBe(2);
    });
    it('Modal snapshot', () => {
        const mockOptions: IAddUserModalOptions = {
            onAddUserHandler: () => null,
        };

        const modal = render(<AddUserModal onClose={() => null} option={mockOptions} />);

        expect(modal).toMatchSnapshot();
    });
});
