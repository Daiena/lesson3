import { log } from "console";
import React, { useRef, useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const TestPage=()=>{
    const myRef=useRef(0);
    const [value, setValue]=useState("");
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setValue(e.target.value);
    }
    const handleClick=()=>{
        alert(`Нажали ${myRef.current++} раз`)
    }
    console.log("Рендер");
    
    return (
        <div>
            <MyInput value={value} name="test" handleChange={handleChange} />
            <MyButton onClick={handleClick}>Кнопка</MyButton>
        </div>
    );
};

export default TestPage;