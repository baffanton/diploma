import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Button } from 'components/core/Button';
import { Layout } from 'components/core/Layout';
import { TextBox } from 'components/core/TextBox';
import { IAuthData, IAuthPage } from './types';
import { schema } from './validateScheme';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { SizeEnum } from 'enums/sizeTypes';
import { getCompanyLogo } from 'helpers/companyLogo';
import { loginUser } from 'store/reducers/UserReducer/actions';
import './style.scss';

const AuthPage: React.FC<IAuthPage> = ({ loginUser, auth }) => {
    const navigate = useNavigate();
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    useEffect(() => {
        if (auth) {
            navigate('/home');
        }
    }, [auth]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IAuthData>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IAuthData> = (formData) => {
        loginUser(formData, navigate);
    };

    const onIconClick = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <Layout className="auth-page" id="auth-page">
            <Layout className="auth-page__body">
                <Layout className="auth-page__company-logo">{getCompanyLogo()}</Layout>
                <form className="auth-page__form" onSubmit={handleSubmit(onSubmit)}>
                    <Layout className="auth-page__data">
                        <TextBox
                            id="email"
                            label="E-mail"
                            labelPosition={LabelPositionEnum.top}
                            placeholder="Введите почту"
                            register={register('email')}
                            error={errors.email}
                            colorTheme={ColorThemeType.ordinary}
                            heightType={SizeEnum.medium}
                            classNameContainer="auth-page__email"
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
                            type={isShowPassword ? InputTypesEnum.text : InputTypesEnum.password}
                        />
                    </Layout>
                    <Layout className="auth-page__submit-button-container">
                        <Button
                            className="auth-page__submit-button"
                            colorTheme={ColorThemeType.white}
                            heightType={SizeEnum.medium}
                            onClick={() => null}
                        >
                            Войти
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    const { user } = state;

    return {
        auth: user.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser(authData: IAuthData, navigate: NavigateFunction) {
            return dispatch(loginUser(authData, navigate));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
