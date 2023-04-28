import cx from 'classnames';
import './style.scss';
import { Layout } from 'widgets/Layout';

interface IInputCheckbox {
    id: string;
    name?: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    checked?: boolean;
    errors?: any;
    register?: any;
}

const InputCheckbox: React.FC<IInputCheckbox> = ({
    id,
    name = '',
    label,
    onChange,
    onClick,
    classNameInput = '',
    classNameLabel = '',
    classNameContainer = '',
    checked,
    errors,
    register,
}) => {
    const inputClassNames = cx('input-checkbox', classNameInput);
    const labelClassNames = cx('input-checkbox__label', classNameLabel);
    const containerClassNames = cx('input-checkbox__container', classNameContainer);
    return (
        <Layout className={containerClassNames}>
            <input 
                className={inputClassNames} 
                id={id}
                type="checkbox" 
                checked={checked} 
                onChange={onChange}
                onClick={onClick}
                {...register}
            />
            <label className={labelClassNames} htmlFor={id}>{label}</label>
            {errors && (
                <Layout className='input-checkbox__error'>{errors}</Layout>
            )}
        </Layout>
    )
}

export { InputCheckbox };
