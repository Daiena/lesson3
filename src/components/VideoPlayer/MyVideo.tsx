import { log } from "console";
import React, { useEffect, useRef } from "react"; 
import { IVideo } from "./sourceVideo";

interface MyVideoProps{
    video: IVideo;
    isPlaying: boolean;
}

const MyVideo=({video, isPlaying}:MyVideoProps)=>{
    const videoRef=useRef<HTMLVideoElement>(null);
    useEffect(()=>{
        if (isPlaying){
            videoRef.current?.play();
        }else{
            videoRef.current?.pause();   
        }
        console.log("рендер компонента");
    }, [isPlaying]);   
    return(
    <video
     className="w-50"
     src={video.source}
     poster={video.thumb}
     ref={videoRef}></video>
    )
}

export default MyVideo;