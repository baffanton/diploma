import * as yup from 'yup';

export const schema = yup.object({
    name: yup
        .string()
        .required('Поле не может быть пустым*'),
    lastname: yup
        .string()
        .required('Поле не может быть пустым*'),
    surname: yup
        .string()
        .required('Поле не может быть пустым*'),
    username: yup
        .string()
        .required('Поле не может быть пустым*'),
    password: yup
        .string()
        .required('Поле не может быть пустым*')
        .min(6, 'Не менее 6 символов'),
});