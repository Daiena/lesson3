import React, { useEffect, useRef, useState } from "react";
import MyVideoPlayer from "../components/VideoPlayer/MyVideoPlayer"
import MyInput from "../components/MyInput";


const TestPage=()=>{
    const [value, setValue]=useState("");
    const [posts, setPosts]=useState();
    const buttonRef=useRef<HTMLButtonElement>(null);
    const getPosts=async ()=>{
        const response= await fetch ("https://jsonplaceholder.typicode.com/posts");
        const data= await response.json();
        console.log(data);        
    }  
    useEffect(()=>{
        getPosts();
        const handleClick=()=>{alert("кнопка нажата")};
        buttonRef.current?.addEventListener("click", handleClick);
        return ()=>{
            buttonRef.current?.removeEventListener("click", handleClick);
        }
    }, []) 
  
    const handleChange:React.ChangeEventHandler<HTMLInputElement>=(e)=>{
        setValue(e.target.value);
    }
    return(
        <div className="row">
              
            <div className="col-8">
            <button ref={buttonRef}>Кнопка</button>
            <MyInput value={value} name="test" handleChange={handleChange} />
            </div>
        </div>
    )
}
export default TestPage;