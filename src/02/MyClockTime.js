import {useState} from "react";

const MyClockTime = () => {
    
    
    let t = new Date().toLocaleTimeString();
    const [myTime,setMyTime] = useState(t);
    


    setInterval(() => setMyTime(new Date().toLocaleTimeString()), 1000)
   
    return (
        <footer>
            <h1>{myTime} </h1>
        </footer>
    );



}
export default MyClockTime;