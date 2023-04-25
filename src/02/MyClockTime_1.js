import {useState} from "react";

const MyClockTime = () => {
    
    
    let t = new Date().toLocaleTimeString();
    const [myTime,setMyTime] = useState(t);

    let cnt = 0;
    setTimeout(setMyTime(), 1000);
    
    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );



}
export default MyClockTime;