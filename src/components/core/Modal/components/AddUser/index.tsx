import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';
import { TextBox } from 'components/core/TextBox';

import { IAddUserDataModel, IAddUserModal } from './types';
import { schema } from './validateScheme';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';

import './style.scss';

const AddUserModal: React.FC<IAddUserModal> = ({ onClose, option }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAddUserDataModel>({
        mode: 'onSubmit',
        resolver: yupResolver(schema),
    });

    const { onAddUserHandler } = option;

    const onSubmit: SubmitHandler<IAddUserDataModel> = (formData) => {
        onAddUserHandler(formData);
    };

    return (
        <Layout className="add-user-modal">
            <Layout className="add-user-modal__header">
                <Text className="add-user-modal__title" fontSize={SizeEnum.large}>
                    Новый пользователь
                </Text>
                <Icon
                    className="add-user-modal__close"
                    onClick={() => onClose()}
                    fontAwesomeIcon={faXmark}
                    heightType={SizeEnum.short}
                />
            </Layout>
            <Layout className="add-user-modal__body">
                <form className="add-user-modal__form" onSubmit={handleSubmit(onSubmit)}>
                    <Layout className="add-user-modal__personal-data">
                        <Text className="add-user-modal__block-title" fontWeight={WeightEnum.bold}>
                            Личные данные
                        </Text>
                        <TextBox
                            id="lastname"
                            label="Фамилия"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите фамилию"
                            register={register('lastname')}
                            error={errors.lastname}
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.short}
                            classNameContainer="add-user-modal__lastname"
                        />
                        <TextBox
                            id="name"
                            label="Имя"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите имя"
                            register={register('firstname')}
                            error={errors.firstname}
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.short}
                            classNameContainer="add-user-modal__name"
                        />
                        <TextBox
                            id="surname"
                            label="Отчество"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите отчество"
                            register={register('surname')}
                            error={errors.surname}
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.short}
                            classNameContainer="add-user-modal__surname"
                        />
                    </Layout>
                    <Layout className="add-user-modal__login-details">
                        <Text className="add-user-modal__block-title" fontWeight={WeightEnum.bold}>
                            Данные для входа
                        </Text>
                        <TextBox
                            id="username"
                            label="Имя пользователя"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите имя пользователя"
                            register={register('username')}
                            error={errors.username}
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.short}
                            classNameContainer="add-user-modal__username"
                        />
                        <TextBox
                            id="password"
                            label="Пароль"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите пароль"
                            register={register('password')}
                            error={errors.password}
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.short}
                            classNameContainer="add-user-modal__password"
                        />
                    </Layout>
                    <Layout className="add-user-modal__submit-button-container">
                        <Button
                            className="add-user-modal__submit-button"
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.medium}
                            onClick={() => null}
                        >
                            Добавить пользователя
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    );
};

export { AddUserModal };
