import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";

interface myBattonProps{
    children:string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const MyButton=({children, type="button", onClick, disabled=false}:myBattonProps)=>{
    const theme=useTheme();
    const classForButton=classNames(
        "btn",
        {"btn-primary": theme === "ligth"},
        {"btn-dark": theme === "dark"},
    )
    return <button disabled={disabled} className={classForButton} type={type} onClick={onClick}>
        {children}
        </button>
};

export default MyButton;
