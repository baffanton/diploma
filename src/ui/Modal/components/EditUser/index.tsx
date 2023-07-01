import { SubmitHandler, useForm } from 'react-hook-form';
import './style.scss';
import { IEditUserDataModel, IEditUserModel } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validateScheme';
import { Layout } from 'widgets/Layout';
import { Text } from 'widgets/Text';
import { SizeEnum } from 'enums/sizeTypes';
import { Icon } from 'ui/Icon';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { WeightEnum } from 'enums/weightTypes';
import { TextBox } from 'ui/TextBox';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { Button } from 'ui/Button';

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
            username: user.username,
            password: user.password,
        },
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IEditUserDataModel> = (formData) => {
        onEditUserHandler(formData);
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
                            heightType={SizeEnum.short}
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
                            heightType={SizeEnum.short}
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
                            heightType={SizeEnum.short}
                            classNameContainer="edit-user-modal__surname"
                        />
                    </Layout>
                    <Layout className="edit-user-modal__login-details">
                        <Text className="edit-user-modal__block-title" fontWeight={WeightEnum.bold}>
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
                            classNameContainer="edit-user-modal__username"
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
                            classNameContainer="edit-user-modal__password"
                        />
                    </Layout>
                    <Layout className="edit-user-modal__submit-button-container">
                        <Button
                            className="edit-user-modal__submit-button"
                            colorTheme={ColorThemeType.primary}
                            heightType={SizeEnum.medium}
                            onClick={() => {}}
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
