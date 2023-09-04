import Rectangle from "../../../../image/Rectangle.png"
import Btn from "../../../Button/Btn";
import logo from "../../../../image/logo.svg";

const NameItem = ({state}) => {
    return (
        <div className='container'>
            <div className="main">
                <div className="main_form">
                    <div className="reg">
                        <span className="reg_quest">Как мы можем ваc звать?</span>
                        <input type="text" className="reg_name form_input " placeholder="Как вас звать?"/>
                        <Btn value={state.value}  to={state.to} className={state.className} />
                    </div>
                    <img src={Rectangle} alt=""  className="Rectangle"/>
                    <div className="logo_span">
                        <img src={logo} alt="#"/>
                        <span >SpendSplif</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default NameItem;