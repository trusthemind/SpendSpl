let value_btn = 'Продолжить'
let value_ClassName = 'reg_button'
let state = {
    main:{
        to:'/#',
        value:'Войти',
        className:value_ClassName,
    },
    name:{
        to:'/Country',
        value:value_btn,
        className:'reg_button',
    },
    сountry:{
        to:'/#',
        value:'Создать аккаунт',
        className:value_ClassName,
    },
    registr:{
        value:value_btn,
        to:'/Repass',
        className:'submit__title',
    },
    repass:{
        value:value_btn,
        className:value_ClassName,
        to:'/Name',
    },
}
export default state;
