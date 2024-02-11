import { ReactComponent as CheckSVG} from "./check.svg";
import { ReactComponent as DeleteSVG} from "./delete.svg";

const iconTypes = {
    "delete": <DeleteSVG/>,
    "check": <CheckSVG/>
};

function TodoIcon({ type, color, onClick }) {
    return(
        <span 
            className={ `TodoItem-${ type } ${color}` }
            onClick={ onClick }
        >
            {
                iconTypes[type]
            }
        </span>
    );
}

export { TodoIcon };