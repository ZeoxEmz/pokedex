import { useEffect, useState } from "react";

export const UseScreen = ()=>{
    const [small,setSmall] = useState(window.innerWidth <= 900)

    useEffect(() => {
        const handleResize = () => {
            setSmall(window.innerWidth <= 900);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    }, []);
    return {small}
}