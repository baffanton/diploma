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
import { useState } from 'react';
import { InputTypesEnum } from 'enums/inputTypes';
import { LabelPositionEnum } from 'enums/labelPositionTypes';
import { HeightTypes } from 'enums/heightTypes';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { CheckBox } from 'ui/CheckBox';
import { Button } from 'ui/ButtonU';
import { useDispatch } from 'react-redux';
import { fetchUser } from 'store/reducers/UserReducer/actions';
import { useNavigate } from 'react-router-dom';

interface IAuthPage {

}

const AuthPage: React.FC<IAuthPage> = () => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        resetField,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<ILoginData>({
        mode: 'onSubmit',
        defaultValues: {
            username: "",
            password: "",
        },
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<ILoginData> = data => {
        console.log(data);

        const { username, password } = data;

       
        if (username !== "user" && password !== "password") {
            resetField("username");
            return resetField("password");
        }

        // @ts-ignore
        dispatch(fetchUser(data));
        navigate('/home')
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
                            heightType={HeightTypes.large}
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
                            heightType={HeightTypes.large}
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
                            heightType={HeightTypes.large}
                            register={register('remember')}
                            errors={errors.remember}                      
                        />
                        <Layout className='auth-page__forget'>Забыли пароль?</Layout>
                    </Layout>
                    <Layout className='auth-page__submit-button-container'>
                        <Button 
                            className='auth-page__submit-button'
                            colorTheme={ColorThemeType.white}
                            heightType={HeightTypes.medium}
                        >
                            Войти
                        </Button>
                    </Layout>
                </form>
            </Layout>
        </Layout>
    )
}

export default AuthPage;
