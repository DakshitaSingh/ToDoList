import {useState,useEffect} from "react"
export const TodoDate=()=>{
   //useState
   const [datetime, setdatetime] = useState("");


        const getDateTime = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setdatetime(`${formattedDate}-${formattedTime}`);
            
          };
          useEffect(() => {
            const interval = setInterval(() => {
              getDateTime();
            }, 1000);
            return () => clearInterval();
          }, []);
    return <h2 className="date-time">{datetime}</h2>
}