import "../stylesheets/button.css";
const Button = ({ btnText, classname,clickType,onClick}) => {
    return (
        <>
            <button className={classname} type={clickType} onClick={onClick}>
                {btnText}
            </button>
        </>
    )
}
export default Button