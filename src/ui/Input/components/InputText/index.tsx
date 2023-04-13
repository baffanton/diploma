import cx from 'classnames';
import './style.scss';
import { Column, Row } from 'ui/Field';
import { AlignItemsTypes, JustifyContentTypes } from 'enums/flexTypes';
import { InputTypesEnum } from 'enums/inputTypes';

interface IInputText {
    id: string;
    type: InputTypesEnum;
    name?: string;
    label?: string;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    error?: any;
    register?: any;
    value?: string;
}

const InputText: React.FC<IInputText> = ({
    id,
    type = "text",
    name = '',
    label,
    onChange,
    classNameInput = '',
    classNameLabel = '',
    classNameContainer = '',
    placeholder = '',
    error,
    register,
    value,
    ...props
}) => {
    const inputClassNames = cx('input-text', classNameInput);
    const labelClassNames = cx('input-text__label', classNameLabel);
    const containerClassNames = cx('input-text__wrapper', classNameContainer);

    return (
        <Column className={containerClassNames}>
            <Row ai={AlignItemsTypes.center} jc={JustifyContentTypes.spaceBetween}>
                {label && <label className={labelClassNames} htmlFor={id}>{label}</label>}
                {error && <p className="input-text__error">{error.message}</p>}
            </Row>
            <input 
                id={id}
                name={name}
                className={inputClassNames} 
                placeholder={placeholder} 
                type={type}
                onChange={onChange}
                value={value}
                {...register}
                {...props} 
            />
        </Column>
    )
}

export { InputText };
