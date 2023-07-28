import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';
import { TextBox } from 'components/core/TextBox';
import { IChangeUserDataModel, IChangeUserModal } from './types';
import { schema } from './validateScheme';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangeUserDataTypes } from 'enums/changeUserDataTypes';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';
import { v4 as uuid } from 'uuid';
import './style.scss';

const ChangeUserModal: React.FC<IChangeUserModal> = ({ option, onClose }) => {
    const { type, user, onSubmitHandler } = option;
    const isEdit = type === ChangeUserDataTypes.edit;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IChangeUserDataModel>({
        mode: 'onSubmit',
        defaultValues: {
            firstname: isEdit ? user.firstname : '',
            lastname: isEdit ? user.lastname : '',
            surname: isEdit ? user.surname : '',
            workPlace: isEdit ? user.workPlace : '',
            position: isEdit ? user.position : '',
            phone: isEdit ? user.phone : '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IChangeUserDataModel> = (formData) => {
        if (isEdit) {
            onSubmitHandler(user.id, formData);
        }

        const id = uuid();
        onSubmitHandler(id, formData);
    };

    return (
        <Layout className="change-user-modal">
            <Layout className="change-user-modal__header">
                <Text className="change-user-modal__title" fontSize={SizeEnum.large}>
                    {isEdit ? 'Изменение данных пользователя' : 'Новый пользователь'}
                </Text>
                <Icon
                    className="change-user-modal__close"
                    onClick={() => onClose()}
                    fontAwesomeIcon={faXmark}
                    heightType={SizeEnum.short}
                />
            </Layout>
            <Layout className="change-user-modal__body">
                <form className="change-user-modal__form" onSubmit={handleSubmit(onSubmit)}>
                    <Layout className="change-user-modal__panel">
                        <Layout className="change-user-modal__personal-data">
                            <Text className="change-user-modal__block-title" fontWeight={WeightEnum.bold}>
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
                                classNameContainer="change-user-modal__lastname"
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
                                classNameContainer="change-user-modal__name"
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
                                classNameContainer="change-user-modal__surname"
                            />
                        </Layout>
                        <Layout className="change-user-modal__work-info">
                            <Text className="change-user-modal__block-title" fontWeight={WeightEnum.bold}>
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
                                classNameContainer="change-user-modal__work-place"
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
                                classNameContainer="change-user-modal__position"
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
                                classNameContainer="change-user-modal__phone"
                            />
                        </Layout>
                    </Layout>
                    <Layout className="change-user-modal__submit-button-container">
                        <Button
                            className="change-user-modal__submit-button"
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.medium}
                            onClick={() => null}
                        >
                            {isEdit ? 'Изменить данные' : 'Добавить пользователя'}
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    );
};

export { ChangeUserModal };
