import Btn from "../../../Button/Btn";
import logo from "../../../../image/logo.svg";

const CountryItem = ({state}) => {
    return (
            <div className="main--registration">
                <div className="main_form">
                    <div className="reg">
                        <span className="reg_quest reg_country">В какой стране вы проживаете?</span>
                        <input type="text" className="reg_place form_input " placeholder="Russian"/>
                        <Btn value={state.value} to={state.to} className={state.className} />
                    </div>
                    <div className="logo_span">
                        <img src={logo} alt="#"/>
                        <span >SpendSplif</span>
                    </div>
                </div>
            </div>

    );
}
export default CountryItem;