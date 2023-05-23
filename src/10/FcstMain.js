import {Link} from "react-router-dom";
import xy from "./getxy.json";
import {useState, useEffect} from 'react';






const FcstMain = () => {
    
    const ops = xy.map((item) =>
    <option value={item["행정구역코드"]} key ={item["행정구역코드"]} >{item["1단계"]}</option>
    );

    const [dateValue, setDate] = useState('');
    const [areaValue, setArea] = useState('');
    const [xValue, setX] = useState('');
    const [yValue, setY] = useState('');

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

    useEffect (() => {
        xy.filter((item) => {
            if (areaValue == item.행정구역코드) {
                setX(item["격자 X"]);
            }

        })

        xy.filter((item) => {
            if (areaValue == item.행정구역코드) {
                setY(item["격자 Y"]);
            }

        })

    }, [areaValue]);

    
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
                <Link to ={`/ultra/${dateValue}/${areaValue}/${xValue}/${yValue}`} role='button'>초단기예보</Link>
                <Link to ='/village' role='button'>단기예보</Link>
            </footer>
        </article>

        </>
    );

}

export default FcstMain;