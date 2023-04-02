import { InputPositionEnum, InputTypesEnum } from "enums/inputTypes";
import { InputText } from "./components/InputText";
import { InputCheckbox } from "./components/InputCheckbox";

interface IInput {
    id: string;
    type: InputTypesEnum;
    name?: string;
    label?: string;
    position?: InputPositionEnum;
    onClick?: any;
    onChange?: any;
    classNameInput?: string;
    classNameLabel?: string;
    classNameContainer?: string;
    placeholder?: string;
    error?: any;
    checked?: boolean;
    register?: any;
}

const Input: React.FC<IInput> = ({
    id,
    type = InputTypesEnum.text,
    ...props
}) => {
    switch (type) {
        case InputTypesEnum.text:
            return <InputText id={id} {...props} />
        case InputTypesEnum.checkbox:
            return <InputCheckbox id={id} {...props} />
        default:
            return null;
    }

}

export { Input };
