import './style.scss';
import { HomeSvgSelector } from 'ui/HomeSvgSelector';
import { ImageEnum } from 'enums/images';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './validateScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginData } from 'store/reducers/UserReducer/helpers';
import { Layout } from 'widgets/Layout';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { TextBox } from 'ui/TextBox';
import { useEffect, useState } from 'react';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CheckBox } from 'ui/CheckBox';
import { Button } from 'ui/Button';
import { connect } from 'react-redux';
import { fetchUser, getToken } from 'store/reducers/UserReducer/actions';
import { Dispatch } from '@reduxjs/toolkit';
import { IFetchUser } from 'store/reducers/UserReducer/types';
import { ModalTypes } from 'enums/modalTypes';
import { closeModal, openModal } from 'store/reducers/ModalReducer/actions';
import { ICloseModal, IOpenModal } from 'store/reducers/ModalReducer/types';
import { useNavigate } from 'react-router-dom';
import { SizeEnum } from 'enums/sizeTypes';
import { Text } from 'widgets/Text';

interface IAuthPage {
    auth: boolean;
    getToken: (username: string, password: string) => Promise<any>;
    fetchUser: () => Dispatch<IFetchUser>;
    closeModal: () => Dispatch<ICloseModal>;
    openModal: (modalTypes: ModalTypes, onClose: () => void, option: any) => Dispatch<IOpenModal>;
}

const AuthPage: React.FC<IAuthPage> = ({ auth, getToken, fetchUser, closeModal, openModal }) => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const { 
        register, 
        resetField, 
        handleSubmit, 
        formState: { errors } 
    } = useForm<ILoginData>({
        mode: 'onSubmit',
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    useEffect(() => {
        if (auth) {
            navigate('/home')
        }
    }, [auth, navigate])

    const onCloseModalHandler = () => {
        closeModal();
    }

    const onSubmit: SubmitHandler<ILoginData> = formData => {
        const { username, password } = formData;
        getToken(username, password)
            .then(res => {
                const { data } = res;

                localStorage.setItem('token', data);

                fetchUser();
            })
            .catch(errors => {
                openModal(ModalTypes.messageModal, onCloseModalHandler, { message: "Неверный логин или пароль" });

                resetField("username");
                resetField("password");
            })
    }

    const onIconClick = () => {
        setIsShowPassword(!isShowPassword);
    }

    return (
        <Layout className='auth-page'>
            <Layout className='auth-page__body'>
                <Layout className='auth-page__company-logo'>
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Layout>
                <form className='auth-page__form' onSubmit={handleSubmit(onSubmit)}>
                    <Layout className='auth-page__data'>
                        <TextBox 
                            id='username'
                            label="Логин"
                            labelPosition={LabelPositionEnum.top}
                            placeholder='Введите логин'
                            register={register('username')}
                            error={errors.username}
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.large}
                            classNameContainer='auth-page__username'
                        />
                        <TextBox 
                            id='password'
                            label="Пароль"
                            labelPosition={LabelPositionEnum.top}
                            placeholder='Введите пароль'
                            register={register('password')}
                            error={errors.password}
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.large}
                            classNameContainer='auth-page__password'
                            icon={isShowPassword ? faEyeSlash : faEye}
                            onIconClick={onIconClick}
                            type={isShowPassword ? InputTypesEnum.text : InputTypesEnum.password}
                        />
                    </Layout>
                    <Layout className='auth-page__management'>
                        <CheckBox 
                            id="remember"
                            label="Не выходить"
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.large}
                            register={register('remember')}
                            errors={errors.remember}                      
                        />
                        <Text className='auth-page__forget'>Забыли пароль?</Text>
                    </Layout>
                    <Layout className='auth-page__submit-button-container'>
                        <Button 
                            className='auth-page__submit-button'
                            colorTheme={ColorThemeType.white}
                            heightType={SizeEnum.medium}
                        >
                            Войти
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        auth: user.auth,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return { 
        getToken(username: string, password: string) { return dispatch(getToken(username, password)); },
        fetchUser() { return dispatch(fetchUser()); },
        closeModal() { return dispatch(closeModal()); },
        openModal(modalTypes: ModalTypes, onClose: () => void, option: any) {
            return dispatch(openModal(modalTypes, onClose, option));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
