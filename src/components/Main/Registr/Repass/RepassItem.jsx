import Btn from "../../../Button/Btn";
import logo from "../../../../image/logo.svg";

const RepassItem = ({state}) => {
    return (
            <div className="main--registration">
                <div className="main_form form--registr">
                    <div className="reg">
                        <span className="reg_title">Пожалуйста повторите пароль который вы писали ранее</span>
                        <input type="text" className="reg_repass form_input " placeholder="Пароль"/>
                        <Btn value={state.value} className={state.className} to={state.to}/>
                    </div>
                    <div className="logo_span">
                        <img src={logo} alt="#"/>
                        <span >SpendSplif</span>
                    </div>
                </div>
            </div>

    );
}
export default RepassItem;