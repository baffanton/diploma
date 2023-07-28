import React from 'react';
import { ChangeUserModal } from 'components/core/Modal/components/ChangeUser';
import { IChangeUserDataModel, IChangeUserModalOptions } from './types';
import { act, fireEvent, render } from '@testing-library/react';
import { ChangeUserDataTypes } from 'enums/changeUserDataTypes';

describe('ChangeUserModal tests', () => {
    it('calls the onSubmit function', async () => {
        const mockSubmitHandler = jest.fn();

        const mockOptions: IChangeUserModalOptions = {
            type: ChangeUserDataTypes.add,
            onSubmitHandler: (id: string, data: IChangeUserDataModel) => mockSubmitHandler(id, data),
        };

        const { getByLabelText, getByRole } = render(<ChangeUserModal onClose={() => null} option={mockOptions} />);

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

        const mockOptions: IChangeUserModalOptions = {
            type: ChangeUserDataTypes.add,
            onSubmitHandler: (id: string, data: IChangeUserDataModel) => mockSubmitHandler(id, data),
        };

        const { container, getByLabelText, getByRole } = render(
            <ChangeUserModal onClose={() => null} option={mockOptions} />,
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
        const mockOptions: IChangeUserModalOptions = {
            type: ChangeUserDataTypes.add,
            onSubmitHandler: () => null,
        };

        const modal = render(<ChangeUserModal onClose={() => null} option={mockOptions} />);

        expect(modal).toMatchSnapshot();
    });
});
