import { useState } from "react";

const MyInput=()=>{
    const [value, setValue] = useState<string>("");
    const handleChange: React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setValue(e.target.value);
    }
    return(
        <>
        <div>{value}</div>        
        <input type="text" onChange={handleChange} value={value} />
        </>
    )
};

export default MyInput;