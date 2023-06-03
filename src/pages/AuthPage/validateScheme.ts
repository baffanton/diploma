import * as yup from 'yup';

export const schema = yup.object({
    username: yup
        .string()
        .required('Поле не может быть пустым*'),
    password: yup
        .string()
        .required('Поле не может быть пустым*')
        .min(6, 'Не менее 6 символов*'),
    remember: yup
        .boolean()
});