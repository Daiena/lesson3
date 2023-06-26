import { forwardRef } from "react";

interface MyInputProps{
    // ref?:React.RefObject<HTMLInputElement>
    value: string | number;
    name: string;
    type?: "text" | "number";
    placeholder?: string;
    handleChange:React.ChangeEventHandler<HTMLInputElement>
}

const MyInput=forwardRef<HTMLInputElement, MyInputProps>(({
    value,
    name,
    placeholder="",
    type="text",
    handleChange}, ref)=>{    
    return(
        <div className="mb-3">
        <input className="form-control"
            ref={ref}
            type={type} 
            name={name}
            onChange={handleChange}
            value={value}
            placeholder={placeholder} />
        </div>
    )
})

export default MyInput;