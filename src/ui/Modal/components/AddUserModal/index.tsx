import { Column, Row } from 'ui/Field';
import './style.scss';
import { Button } from 'ui/Button';
import { Input } from 'ui/Input';
import { InputTypesEnum } from 'enums/inputTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validateScheme';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserModel } from 'store/reducers/TableReducer/helpers';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from 'store/reducers/TableReducer/actions';

interface IAddUserModelProps {
    onClose: any;
    option: any;
}

const AddUserModal: React.FC<IAddUserModelProps> = ({ onClose, option }): React.ReactElement => {
    const [currentGender, setCurrentGender] = useState<string | null>(null);
    const [currentRole, setCurrentRole] = useState<string | null>(null);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<IUserModel>({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<IUserModel> = data => {
        if (!currentGender || !currentRole) {
            return null;
        }

        const model = {
            ...data,
            gender: currentGender === "Мужской" ? "MALE" : "FEMALE",
            role: currentRole === "Пользователь" ? "USER" : "ADMIN"
        }
        // @ts-ignore
        dispatch(addUser(model));
        onClose();
    }

    return (
        <Column className='add-user-modal'>
            <Row className='add-user-modal__title'>Добавление пользователя</Row>
            <form className='add-user-modal__form' onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    label='ID' 
                    classNameLabel='add-user-modal__label' 
                    classNameInput='add-user-modal__input'
                    id="add-user-modal__id" 
                    type={InputTypesEnum.text}
                    placeholder='Введите ID'
                    error={errors.id}
                    register={register('id')} 
                />
                <Input 
                    label='Имя' 
                    classNameLabel='add-user-modal__label' 
                    classNameInput='add-user-modal__input'
                    id="add-user-modal__username" 
                    type={InputTypesEnum.text}
                    placeholder='Введите имя пользователя'
                    error={errors.username}
                    register={register('username')} 
                />
                <Column className='add-user-modal__role'>
                    <p className='add-user-modal__checkbox-title'>Роль</p>
                    <Row>
                        <Input
                            label='Пользователь'
                            classNameLabel='add-user-modal__label' 
                            classNameContainer='add-user-modal__container'
                            id="add-user-modal__role_user" 
                            type={InputTypesEnum.checkbox}
                            checked={currentRole === "Пользователь"}
                            onChange={(e: any) => {
                                if (currentRole === "Пользователь") {
                                    return setCurrentRole(null)
                                }

                                setCurrentRole("Пользователь")
                            }}
                        />
                        <Input
                            label='Администратор'
                            classNameLabel='add-user-modal__label' 
                            classNameContainer='add-user-modal__container'
                            id="add-user-modal__role_admin" 
                            type={InputTypesEnum.checkbox}
                            checked={currentRole === "Администратор"}
                            onChange={(e: any) => {
                                if (currentRole === "Администратор") {
                                    return setCurrentRole(null)
                                }

                                setCurrentRole("Администратор")
                            }}
                        />
                    </Row>
                </Column>
                <Column className='add-user-modal__gender'>
                    <p className='add-user-modal__checkbox-title'>Пол</p>
                    <Row>
                        <Input
                            label='Мужской'
                            classNameLabel='add-user-modal__label' 
                            classNameContainer='add-user-modal__container'
                            id="add-user-modal__gender_male" 
                            type={InputTypesEnum.checkbox}
                            checked={currentGender === "Мужской"}
                            onChange={(e: any) => {
                                if (currentGender === "Мужской") {
                                    return setCurrentGender(null)
                                }

                                setCurrentGender("Мужской")
                            }}
                        />
                        <Input
                            label='Женский'
                            classNameLabel='add-user-modal__label' 
                            classNameContainer='add-user-modal__container'
                            id="add-user-modal__gender_female" 
                            type={InputTypesEnum.checkbox}
                            checked={currentGender === "Женский"}
                            onChange={(e: any) => {
                                if (currentGender === "Женский") {
                                    return setCurrentGender(null)
                                }

                                setCurrentGender("Женский")
                            }}
                        />
                    </Row>
                </Column>
                <Input 
                    label='Возраст' 
                    classNameLabel='add-user-modal__label' 
                    classNameInput='add-user-modal__input'
                    classNameContainer='add-user-modal__container_isAge'
                    id="add-user-modal__age" 
                    type={InputTypesEnum.text}
                    placeholder='Введите возраст'
                    error={errors.age}
                    register={register('age')} 
                />
                <Button className='add-user-modal__accept-button' title='Применить' />
            </form>
        </Column>
    )
}

export { AddUserModal };
