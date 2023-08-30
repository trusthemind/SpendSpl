import Rectangle from "../../../../image/Rectangle.png"
import {Link} from "react-router-dom";
import Btn from "../../../Button/Btn";

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
                </div>
            </div>
        </div>

    );
}
export default NameItem;