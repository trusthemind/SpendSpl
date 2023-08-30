import Rectangle from "../../../../image/Rectangle.png"
import Btn from "../../../Button/Btn";

const CountryItem = ({state}) => {
    return (
        <div className='container'>
            <div className="main">
                <div className="main_form">
                    <div className="reg">
                        <span className="reg_quest">В какой стране вы проживаете?</span>
                        <input type="text" className="reg_name form_input " placeholder="Russian"/>
                        <Btn value={state.value} to={state.to} className={state.className} />

                    </div>
                    <img src={Rectangle} alt="" className="Rectangle"/>
                </div>
            </div>
        </div>

    );
}
export default CountryItem;