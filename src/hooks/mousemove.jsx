import React, { useEffect, useState } from 'react';

 const usemouseMove = () => {
    const [cursormove , setcursormove] = useState({x :0 , y : 0});
    const handlepointer = (e) => {
        setcursormove({x:e.clientX , y : e.clientY})
    }
    useEffect(()=>{
        window.addEventListener("mousemove" , handlepointer);
        return ()=> 
            {
                window.addEventListener("mousemove" ,handlepointer)
            }
    } , [])
  
    return cursormove ;

}
export default usemouseMove;