import {Link} from "react-router-dom";
import xy from "./getxy.json";
import {useState, useRef} from 'react';


const ops = xy.map((item) =>
    <option value={item["행정구역코드"]} key ={item["행정구역코드"]} >{item["1단계"]}</option>
);


const FcstMain = () => {

    const [dateValue, setDate] = useState('');
    const [areaValue, setArea] = useState('');
    const saveDate = event =>   {
        setDate(event.target.value);
        console.log("date:", event.target.value);
    }

    const saveArea = event => {
        setArea(event.target.value);
        console.log("area:", event.target.value);
    }

    const showCnt = (date) => {
        console.log("cnt=",date);
    }
    return (
        <>
        <article>
            <header><h1>단기예보 선택</h1></header>
            <div className='grid'>
                <div>
                    <input onChange = {saveDate} type='date' id='dt' name='dt' />
                </div>
                <div>
                    <select onChange ={saveArea} id='sel' name='sel'>
                        <option value=''>선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <footer>
                <Link to ={`/ultra/${dateValue}/${areaValue}`} role='button'>초단기예보</Link>
                <Link to ='/village' role='button'>단기예보</Link>
            </footer>
        </article>

        </>
    );

}

export default FcstMain;