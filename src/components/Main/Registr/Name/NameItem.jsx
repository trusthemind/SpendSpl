import Btn from "../../../Button/Btn";
import logo from "../../../../image/logo.svg";

const NameItem = ({state}) => {
    return (
            <div className="main--registration">
                <div className="main_form form--registr">
                    <div className="reg">
                        <span className="reg_quest">Как мы можем ваc звать?</span>
                        <input type="text" className="reg_name form_input " placeholder="Как вас звать?"/>
                        <Btn value={state.value}  to={state.to} className={state.className} />
                    </div>
                  
                    <div className="logo_span">
                        <img src={logo} alt="#"/>
                        <span >SpendSplif</span>
                    </div>
                </div>
            </div>

    );
}
export default NameItem;