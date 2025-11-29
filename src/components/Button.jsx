import { Link } from "react-router-dom"

function ButtonLink(props){
    return(
        <Link to={props.url}>{props.text}</Link>
    )
}
export default ButtonLink;