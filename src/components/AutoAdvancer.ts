import React, { useState, useEffect } from "react";

export const useAutoAdvancer = ({frames, interval}) => {
    const [frame, setFrame] = useState(0)
    let intervalId

    // useEffect(()=>{
    //     frames?.map((frame, index) => {
    //         intervalId = setInterval(()=> {
    //             setFrame(index)
    //         }, interval)
    //     })
    // },[])

    useEffect(()=>{
        intervalId = setInterval(()=>{
          frame + 1 < frames ? setFrame(frame+1) : setFrame(0)
        }, interval)
    
        return (
          ()=>clearInterval(intervalId)
        )
    },[])

    return [frame, setFrame]
};