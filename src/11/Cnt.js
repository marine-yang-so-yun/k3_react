import styles from "./Cnt.module.css";
import { useRef, useState } from "react";
import CntDisp from './CntDisp';
import CntInput from './CntInput';
const Cnt = () => {

    const [input, setInput] = useState(0);
    

    return(
        <main className="container">
            <CntInput input={input} setInput={setInput}/>
            <CntDisp input={input}/>
        </main>
    );
}

export default Cnt;

