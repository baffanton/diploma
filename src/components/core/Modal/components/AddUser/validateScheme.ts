import * as yup from 'yup';

export const schema = yup.object({
    firstname: yup.string().required('Поле не может быть пустым*'),
    lastname: yup.string().required('Поле не может быть пустым*'),
    surname: yup.string().required('Поле не может быть пустым*'),
    workPlace: yup.string().required('Поле не может быть пустым*'),
    position: yup.string().required('Поле не может быть пустым*'),
    phone: yup
        .string()
        .required('Поле не может быть пустым*')
        .min(11, 'Не менее 11 символов')
        .max(11, 'Не более 11 символов'),
});
