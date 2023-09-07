import {Link} from "react-router-dom";
import Btn from "../../../Button/Btn";
import logo from "../../../../image/logo.svg";

const RegistrItem = ({state}) => {
    return (
            <div className="main--registration">
                <div className="main_form">
                    <form action="#" className="form">
                        <div className="form_login">
                            <Link to='/' className="login_autr">Авторизация</Link>
                            <Link  to='/Registr' className="login_reg login-active">Регистрация</Link>
                        </div>
                        <div >
                            <input type="text" placeholder="Адрес электронной почты" className="form_email form_input"/>
                            <input type="text" placeholder="Пароль" className="form_password form_input "/>
                        </div>
                        <div className="form_btn">
                            <div className="button_user">
                                <a href="https://google.com" className="user__link">У меня есть</a>
                                <a href="https://google.com" className="user__link"><span className="link___el">Google</span> Аккаунт</a>
                            </div>
                            <div className="button_submit">
                                <Btn value={state.value}  to={state.to}  className={state.className}/>
                            </div>
                        </div>
                    </form>
                    <div className="logo_span">
                        <img src={logo} alt="#"/>
                        <span >SpendSplif</span>
                    </div>
                </div>
        </div>

    );
}
export default RegistrItem;