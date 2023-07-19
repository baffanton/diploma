import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from 'components/core/Button';
import { Icon } from 'components/core/Icon';
import { Layout } from 'components/core/Layout';
import { Text } from 'components/core/Text';
import { TextBox } from 'components/core/TextBox';
import { IEditUserDataModel, IEditUserModel } from './types';
import { schema } from './validateScheme';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { WeightEnum } from 'enums/weightTypes';
import './style.scss';

const EditUserModal: React.FC<IEditUserModel> = ({ option, onClose }) => {
    const { user, onEditUserHandler } = option;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IEditUserDataModel>({
        mode: 'onSubmit',
        defaultValues: {
            firstname: user.firstname,
            lastname: user.lastname,
            surname: user.surname,
            workPlace: user.workPlace,
            position: user.position,
            phone: user.phone,
        },
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IEditUserDataModel> = (formData) => {
        onEditUserHandler(user.id, formData);
    };

    return (
        <Layout className="edit-user-modal">
            <Layout className="edit-user-modal__header">
                <Text className="edit-user-modal__title" fontSize={SizeEnum.large}>
                    Изменение данных пользователя
                </Text>
                <Icon
                    className="edit-user-modal__close"
                    onClick={() => onClose()}
                    fontAwesomeIcon={faXmark}
                    heightType={SizeEnum.short}
                />
            </Layout>
            <Layout className="edit-user-modal__body">
                <form className="edit-user-modal__form" onSubmit={handleSubmit(onSubmit)}>
                    <Layout className="edit-user-modal__panel">
                        <Layout className="edit-user-modal__personal-data">
                            <Text className="edit-user-modal__block-title" fontWeight={WeightEnum.bold}>
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
                                classNameContainer="edit-user-modal__lastname"
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
                                classNameContainer="edit-user-modal__name"
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
                                classNameContainer="edit-user-modal__surname"
                            />
                        </Layout>
                        <Layout className="edit-user-modal__work-info">
                            <Text className="edit-user-modal__block-title" fontWeight={WeightEnum.bold}>
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
                                classNameContainer="edit-user-modal__work-place"
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
                                classNameContainer="edit-user-modal__position"
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
                                classNameContainer="edit-user-modal__phone"
                            />
                        </Layout>
                    </Layout>
                    <Layout className="edit-user-modal__submit-button-container">
                        <Button
                            className="edit-user-modal__submit-button"
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.medium}
                            onClick={() => null}
                        >
                            Изменить данные
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    );
};

export { EditUserModal };
