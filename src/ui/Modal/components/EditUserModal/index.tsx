import { Column, Row } from 'ui/Field';
import './style.scss';
import { Input } from 'ui/Input';
import { InputTypesEnum } from 'enums/inputTypes';
import { Button } from 'ui/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from 'store/reducers/TableReducer/actions';

interface IEditUserModalProps {
    onClose: any;
    option: any;
}

const EditUserModal: React.FC<IEditUserModalProps> = ({ onClose, option }) => {
    const dispatch = useDispatch();
    const { age, gender, id, role, username } = option;
    const [currentAge, setCurrentAge] = useState<string>(age);
    const [currentUsername, setCurrentUsername] = useState<string>(username);
    const [currentRole, setCurrentRole] = useState<string>(role);
    const [currentGender, setCurrentGender] = useState<string>(gender);

    const onSubmitHandler = () => {
        if (!currentAge || !currentUsername || !currentGender || !currentRole) {
            return null;
        }

        const model = {
            id,
            age: Number(currentAge),
            username: currentUsername,
            role: currentRole === "Пользователь" ? "USER" : "ADMIN",
            gender: currentGender === "Мужской" ? "MALE" : "FEMALE"
        }

        // @ts-ignore
        dispatch(editUser(model));
        onClose();
    }

    return (
        <Column className='edit-user-modal'>
            <Row className='edit-user-modal__title'>Изменение пользователя</Row>
            <Column className='edit-user-modal__form'>
                <Input 
                    label='Имя' 
                    classNameLabel='edit-user-modal__label' 
                    classNameInput='edit-user-modal__input'
                    id="edit-user-modal__username" 
                    type={InputTypesEnum.text}
                    value={currentUsername}
                    onChange={(e: any) => setCurrentUsername(e.target.value)}
                />
                <Column className='edit-user-modal__role'>
                    <p className='edit-user-modal__checkbox-title'>Роль</p>
                    <Row>
                        <Input
                            label='Пользователь'
                            classNameLabel='edit-user-modal__label' 
                            classNameContainer='edit-user-modal__container'
                            id="edit-user-modal__role_user" 
                            type={InputTypesEnum.checkbox}
                            checked={currentRole === "Пользователь"}
                            onChange={(e: any) => {
                                if (currentRole === "Пользователь") {
                                    return setCurrentRole("")
                                }

                                setCurrentRole("Пользователь")
                            }}
                        />
                        <Input
                            label='Администратор'
                            classNameLabel='edit-user-modal__label' 
                            classNameContainer='edit-user-modal__container'
                            id="edit-user-modal__role_admin" 
                            type={InputTypesEnum.checkbox} 
                            checked={currentRole === "Администратор"}
                            onChange={(e: any) => {
                                if (currentRole === "Администратор") {
                                    return setCurrentRole("")
                                }

                                setCurrentRole("Администратор")
                            }}
                        />
                    </Row>
                </Column>
                <Column className='edit-user-modal__gender'>
                    <p className='edit-user-modal__checkbox-title'>Пол</p>
                    <Row>
                        <Input
                            label='Мужской'
                            classNameLabel='edit-user-modal__label' 
                            classNameContainer='edit-user-modal__container'
                            id="edit-user-modal__gender_male" 
                            type={InputTypesEnum.checkbox}
                            checked={currentGender === "Мужской"}
                            onChange={(e: any) => {
                                if (currentGender === "Мужской") {
                                    return setCurrentGender("")
                                }

                                setCurrentGender("Мужской")
                            }}
                        />
                        <Input
                            label='Женский'
                            classNameLabel='edit-user-modal__label' 
                            classNameContainer='edit-user-modal__container'
                            id="edit-user-modal__gender_female" 
                            type={InputTypesEnum.checkbox}
                            checked={currentGender === "Женский"}
                            onChange={(e: any) => {
                                if (currentGender === "Женский") {
                                    return setCurrentGender("")
                                }

                                setCurrentGender("Женский")
                            }}
                        />
                    </Row>
                </Column>
                <Input 
                    label='Возраст' 
                    classNameLabel='edit-user-modal__label' 
                    classNameInput='edit-user-modal__input'
                    classNameContainer='edit-user-modal__container_isAge'
                    id="edit-user-modal__age" 
                    type={InputTypesEnum.text} 
                    value={currentAge}
                    onChange={(e: any) => setCurrentAge(e.target.value)}
                />
                <Button className='edit-user-modal__accept-button' title='Применить' onClick={() => onSubmitHandler()} />
            </Column>
        </Column>
    );
}

export { EditUserModal };
