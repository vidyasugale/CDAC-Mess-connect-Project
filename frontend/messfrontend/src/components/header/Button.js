import "../stylesheets/button.css";
const Button = ({ btnText, classname}) => {
    return (
        <>
            <button className={classname}>
                {btnText}
            </button>
        </>
    )
}
export default Button