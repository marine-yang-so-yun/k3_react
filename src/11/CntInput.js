import { useRef, useState } from "react";
const CntInput = () => {


    const inputValue = useRef();


    const changeValue = () =>  {

        setInput(inputValue.current.value);
        
    }
    
    const minusValue =() => {

        if (Number(input) - 1 < 0) setInput(0);
        else setInput(Number(input) -1);
    }

    const plusValue =() => {

        
        setInput(Number(input) +1);
    }

    return (
    <article>
        <div className="grid" id="bt1">
            <div></div>
            <div><button onClick={minusValue}>-</button></div>
            <div><input type="text" ref={inputValue} onChange={changeValue} value={input}/></div>
            <div><button onClick={plusValue}>+</button></div>
            <div></div>
        </div>
    </article>
    );
}

export default CntInput;