import { Column, Row } from 'ui/Field';
import './style.scss';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { HomeSvgSelector } from 'ui/HomeSvgSelector';
import { ImageEnum } from 'enums/images';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './validateScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'ui/Input';
import { InputTypesEnum } from 'enums/inputTypes';
import { Button } from 'ui/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { ILoginData } from 'store/reducers/UserReducer/helpers';
import { fetchUser } from 'store/reducers/UserReducer/actions';

interface IAuthPage {
    auth: boolean;
}

const AuthPage: React.FC<IAuthPage> = ({ auth }) => {
    const [rememberLogInData, setRememberLogInData] = useState<boolean>(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth) {
            navigate("/home");
        }

    }, [auth, navigate])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ILoginData>({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    const onChangeHandler = () => {
        setRememberLogInData(!rememberLogInData);
    }

    const onSubmit: SubmitHandler<ILoginData> = data => {
        // @ts-ignore
        dispatch(fetchUser(data, rememberLogInData));
    }

    return (
        <Column className="auth-page" fullHeight ai={AlignItemsTypes.center} jc={JustifyContentTypes.center}>
            <Column className="auth-page__body" ai={AlignItemsTypes.center}>
                <Row className="auth-page__company" noFlex>
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Row>
                <p className="auth-page__title">Авторизация</p>
                <form className="auth-page__form" onSubmit={handleSubmit(onSubmit)}>
                    <Column className="auth-page__fields">
                        <Input 
                            type={InputTypesEnum.text} 
                            id="user-login"
                            label="Логин"
                            classNameInput='auth-page__form-input'
                            classNameLabel='auth-page__form-label'
                            placeholder='Введите логин'
                            error={errors.username}
                            register={register('username')}          
                        />
                        <Input 
                            type={InputTypesEnum.password} 
                            id="user-password"
                            name="password"
                            label="Пароль"
                            classNameInput='auth-page__form-input'
                            classNameLabel='auth-page__form-label'
                            placeholder='Введите пароль'
                            error={errors.password}
                            register={register('password')}        
                        />
                    </Column>
                    <Row className="manage-panel" jc={JustifyContentTypes.spaceBetween} ai={AlignItemsTypes.center}>
                        <Input 
                            type={InputTypesEnum.checkbox} 
                            id="user-leave" 
                            label="Не выходить из системы"
                            classNameContainer='manage-panel__leave'
                            checked={rememberLogInData}
                            onChange={onChangeHandler}
                        />
                        <p className="manage-panel__forgot">Забыли пароль?</p>
                        
                    </Row>
                    <Button title="Войти" className="auth-page__onSubmit" />
                </form>
            </Column>
        </Column>
    )
}

const mapStateToProps = (state: any) => {
    const { user } = state;

    return {
        auth: user.auth,
    }
}

export default connect(mapStateToProps)(AuthPage);
