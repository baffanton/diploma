import './style.scss';
import { HomeSvgSelector } from 'ui/HomeSvgSelector';
import { ImageEnum } from 'enums/images';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './validateScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Layout } from 'widgets/Layout';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { TextBox } from 'ui/TextBox';
import { useState } from 'react';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'ui/Button';
import { connect } from 'react-redux';
import { fetchUser, getToken } from 'store/reducers/UserReducer/actions';
import { ModalTypes } from 'enums/modalTypes';
import {
    closeModal,
    hideLoader,
    openModal,
    showLoader,
} from 'store/reducers/PageReducer/actions';
import { useNavigate } from 'react-router-dom';
import { SizeEnum } from 'enums/sizeTypes';
import { Text } from 'widgets/Text';
import { IAuthData, IAuthPage } from './types';
import { IMessageModalOptions } from 'ui/Modal/components/MessageModal/types';

const AuthPage: React.FC<IAuthPage> = ({
    closeModal,
    openModal,
    showLoader,
    hideLoader,
    fetchUser,
}) => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const {
        register,
        resetField,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthData>({
        mode: 'onSubmit',
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const onCloseModalHandler = () => {
        closeModal();
    };

    const onSubmit: SubmitHandler<IAuthData> = async (formData) => {
        const { username, password } = formData;

        showLoader();
        await getToken(username, password)
            .then((result) => {
                const { data } = result;

                localStorage.setItem('token', data);
                fetchUser();
                navigate('/home');
            })
            .catch(() => {
                openModal(ModalTypes.messageModal, onCloseModalHandler, {
                    message: 'Неверный логин или пароль',
                });
                resetField('password');
            })
            .finally(() => {
                hideLoader();
            });
    };

    const onIconClick = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <Layout className="auth-page">
            <Layout className="auth-page__body">
                <Layout className="auth-page__company-logo">
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Layout>
                <form
                    className="auth-page__form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Layout className="auth-page__data">
                        <TextBox
                            id="username"
                            label="Логин"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите логин"
                            register={register('username')}
                            error={errors.username}
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.medium}
                            classNameContainer="auth-page__username"
                        />
                        <TextBox
                            id="password"
                            label="Пароль"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите пароль"
                            register={register('password')}
                            error={errors.password}
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.medium}
                            classNameContainer="auth-page__password"
                            icon={isShowPassword ? faEyeSlash : faEye}
                            onIconClick={onIconClick}
                            type={
                                isShowPassword
                                    ? InputTypesEnum.text
                                    : InputTypesEnum.password
                            }
                        />
                    </Layout>
                    <Layout className="auth-page__management">
                        <Text
                            className="auth-page__forget"
                            fontSize={SizeEnum.medium}
                            pointer
                        >
                            Забыли пароль?
                        </Text>
                    </Layout>
                    <Layout className="auth-page__submit-button-container">
                        <Button
                            className="auth-page__submit-button"
                            colorTheme={ColorThemeType.white}
                            heightType={SizeEnum.medium}
                            onClick={() => {}}
                        >
                            Войти
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    );
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUser() {
            return dispatch(fetchUser());
        },
        closeModal() {
            return dispatch(closeModal());
        },
        openModal(
            modalTypes: ModalTypes,
            onClose: () => void,
            option: IMessageModalOptions,
        ) {
            return dispatch(openModal(modalTypes, onClose, option));
        },
        showLoader() {
            return dispatch(showLoader());
        },
        hideLoader() {
            return dispatch(hideLoader());
        },
    };
};

export default connect(null, mapDispatchToProps)(AuthPage);
