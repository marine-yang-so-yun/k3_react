import { useState, useEffect } from "react";
const FcstTable = (items, gubun) => {


    //useState 변수는 변수값이 변경이 되면 재 랜더링이 일어남
    const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();

    //랜더링이 될 때 한 번 실행
    
    useEffect(() => {
        if (items === undefined)    return;

        let temp = items.map((i) => 
            <tr>
                <td>{i.category}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>{i.fcstValue}</td>
            </tr>
        );
        console.log('items', items);
        setTrTags(temp);
    }, [items]);
    return (
        <main className='container'>
            <article>
                <header><h1>기상청 초단기예보</h1></header>
                <table>
                    <thead>
                        <tr>
                        <th>자료구분코드</th>
                            <th>예측일자</th>
                            <th>예측시간</th>
                            <th>예보값</th>
                        </tr>
                    </thead>
                    {items && trTags}

                </table>
            </article>
        </main>

    );


}


export default Fcst;