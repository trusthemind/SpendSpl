import {Link} from "react-router-dom";

const Btn = (props) => {
    return (
        <>
            <Link to={props.to} className={props.className}>{props.value}</Link>
        </>

    );
}
export default Btn;