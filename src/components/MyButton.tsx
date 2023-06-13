interface myBattonProps{
    children:string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const MyButton=({children, type="button", onClick}:myBattonProps)=>{
    
    return <button className="btn btn-primary" type={type} onClick={onClick}>{children}</button>
};

export default MyButton;
