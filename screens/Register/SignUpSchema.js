import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    userEmail: Yup.string().email('Введите корректную электронную почту!').required('Required'),
    userPassword: Yup.string()
        .min(7, 'Ведённый пароль должен содержать минимум 7 символов!')
        .max(86, 'Ну слушай, куда ты там погнал, максимум 86 символов!')
        .required('Required')
});

export default SignUpSchema;
