import * as yup from 'yup';

export const schema = yup.object({
    id: yup
        .string()
        .required('Поле не может быть пустым'),
    username: yup
        .string()
        .required('Поле не может быть пустым')
        .min(5, 'Не менее 5 символов'),
    age: yup
        .number()
        .required('Поле не может быть пустым'),
});