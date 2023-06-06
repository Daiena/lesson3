interface myBattonProps{
    children:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const MyButton=({children, onClick}:myBattonProps)=>{
    
    return <button onClick={onClick}>{children}</button>
};

export default MyButton;

// function MyButton(){
//     return (
//         <button>Моя кнопка</button>
//     );
// }