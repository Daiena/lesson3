import { useState } from "react";
import MyButton from "./MyButton";

const Counter=()=>{
    const [count, setCount]=useState<number>(0);
    const onIncrement=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <strong>{count}</strong>
            <MyButton onClick={onIncrement}>+1</MyButton>
        </div>
    )
}

export default Counter;