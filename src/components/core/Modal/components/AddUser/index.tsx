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
import { v4 as uuid } from 'uuid';
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
        const id = uuid();
        onAddUserHandler(id, formData);
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
                    <Layout className="add-user-modal__panel">
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
                                heightType={SizeEnum.medium}
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
                                heightType={SizeEnum.medium}
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
                                heightType={SizeEnum.medium}
                                classNameContainer="add-user-modal__surname"
                            />
                        </Layout>
                        <Layout className="add-user-modal__personal-data">
                            <Text className="add-user-modal__block-title" fontWeight={WeightEnum.bold}>
                                Данные о работе
                            </Text>
                            <TextBox
                                id="workPlace"
                                label="Место работы"
                                labelPosition={LabelPositionEnum.top}
                                placeholder="Введите место работы"
                                register={register('workPlace')}
                                error={errors.workPlace}
                                colorTheme={ColorThemeType.primary}
                                heightType={SizeEnum.medium}
                                classNameContainer="add-user-modal__work-place"
                            />
                            <TextBox
                                id="position"
                                label="Должность"
                                labelPosition={LabelPositionEnum.top}
                                placeholder="Введите должность"
                                register={register('position')}
                                error={errors.position}
                                colorTheme={ColorThemeType.primary}
                                heightType={SizeEnum.medium}
                                classNameContainer="add-user-modal__position"
                            />
                            <TextBox
                                id="phone"
                                label="Номер телефона"
                                labelPosition={LabelPositionEnum.top}
                                placeholder="Введите номер телефона"
                                register={register('phone')}
                                error={errors.phone}
                                colorTheme={ColorThemeType.primary}
                                heightType={SizeEnum.medium}
                                classNameContainer="add-user-modal__phone"
                            />
                        </Layout>
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
