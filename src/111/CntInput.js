import { useRef } from "react";
import {Link} from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { CntAtoms } from "./CntAtoms";


const CntInput = () => {

    const [input, setInput] = useRecoilState(CntAtoms);
    
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
        <>
    <article>
        <div className="grid" id="bt1">
            <div></div>
            <div><button onClick={minusValue}>-</button></div>
            <div><input type="text" ref={inputValue} onChange={changeValue} value={input}/></div>
            <div><button onClick={plusValue}>+</button></div>
            <div></div>
        </div>
        <Link to='/disp'>출력페이지로 이동</Link>
        <article>
            <h1>입력값: {input} , 입력값 2배:{input *2}</h1>
            <Link to='/'>입력페이지로 이동</Link>
        </article>
    </article>

    
    </>
    );
}

export default CntInput;