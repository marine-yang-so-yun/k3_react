
//컴포넌트에 적용
import style from './MyDiv.module.css';

//전역으로 적용
//import './MyDiv.css';

//const MyDivArticle = (probs) => {
//매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용


//state 변수 사용 1단계
import { useState } from 'react';

const MyDivArticle = ({aname}) => {
    //const aname = probs.aname;
    let n = aname === undefined ? '0' : aname.slice(-1) ;
    //let cnt = 0;
    

    //state 변수 사용 2단계 : 변수 선언
    const [cnt, setCnt]  = useState(9) 

    //click 이벤트 처리
    const like = () =>  {
        setCnt(cnt+1);
        console.log(cnt);
    }


    console.log(n);
    return (
        <article>
            <header><h1 className={style.mah1}>{aname|| 'MyDiv0'}</h1></header>
            <ul className = {style.aul}>
                <li className={style.ail}>{aname || 'MyDiv0' + '1'}</li>
                <li className={style.ail}>{!aname ? aname : 'MyDiv0'}1</li>
                <li className={style.ail}>{aname === 'MyDiv1'}1</li>
                <li className={style.ail}>{aname}2</li>
                <li className={style.ail}>{n === '0'?'MyDiv0' : aname}</li>
                <li className={style.ail}>{'MyDiv'+n}2</li>
            </ul>
            { n === '1' &&
                <footer><h2><span onClick={like}>❤</span>{cnt}</h2></footer>
            }
        </article>

    );
}

export default MyDivArticle;