import './style.scss';
import { HomeSvgSelector } from 'ui/HomeSvgSelector';
import { ImageEnum } from 'enums/images';
import { SubmitHandler, useForm } from 'react-hook-form';
import { schema } from './validateScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { ILoginData } from 'store/reducers/UserReducer/helpers';
import { Layout } from 'widgets/Layout';
import { InputText } from 'ui/InputText';
import { ColorThemeType } from 'enums/colorThemeTypes';
import { SizeTypes } from 'enums/sizeTypes';
import { InputCheckbox } from 'ui/InputCheckbox';
import { Button } from 'ui/Button';

interface IAuthPage {

}

const AuthPage: React.FC<IAuthPage> = () => {
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

    const onSubmit: SubmitHandler<ILoginData> = data => {
        debugger;
        console.log(data);
    }

    return (
        <Layout className='auth-page'>
            <Layout className='auth-page__body'>
                <Layout className='auth-page__company-logo'>
                    <HomeSvgSelector icon={ImageEnum.logo} />
                </Layout>
                <form className='auth-page__form' onSubmit={handleSubmit(onSubmit)}>
                    <Layout className='auth-page__data'>
                        <InputText 
                            id='username' 
                            colorTheme={ColorThemeType.ordinary}
                            sizeType={SizeTypes.medium}
                            label="Логин"
                            classNameInput='auth-page__username_tag_input'
                            classNameLabel='auth-page__username_tag_label'
                            classNameContainer='auth-page__username-container'
                            placeholder='Введите логин'
                            register={register('username')}
                            error={errors.username}
                            autoComplete={false}
                        />
                        <InputText 
                            id='password' 
                            colorTheme={ColorThemeType.ordinary}
                            sizeType={SizeTypes.medium}
                            label="Пароль"
                            classNameInput='auth-page__password_tag_input'
                            classNameLabel='auth-page__password_tag_label'
                            classNameContainer='auth-page__password-container'
                            placeholder='Введите пароль'
                            register={register('password')}
                            error={errors.password}
                            isPassword
                            autoComplete={false}
                        />
                    </Layout>
                    <Layout className='auth-page__management'>
                        <InputCheckbox
                            id="remember"
                            label="Не выходить"
                            colorTheme={ColorThemeType.ordinary}
                            sizeType={SizeTypes.big}
                            classNameInput='auth-page__remember_tag_input'
                            classNameLabel='auth-page__remember_tag_label'
                            classNameContainer='auth-page__remember-container'
                            register={register('remember')}
                            error={errors.remember}
                        />
                        <Layout className='auth-page__forget'>Забыли пароль?</Layout>
                    </Layout>
                    <Layout className='auth-page__submit-button-container'>
                        <Button 
                            className='auth-page__submit-button'
                            colorTheme={ColorThemeType.white}
                            sizeType={SizeTypes.medium}
                            type='submit'
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
