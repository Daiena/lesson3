import React, { useRef } from "react";

const TestPage=()=>{
    const inputRef=useRef<HTMLInputElement>(null);
    const handleClick=()=>{
        inputRef.current?.focus();
    }
    return(
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}
export default TestPage;