import { useState, useEffect } from "react";
const Fcst = () => {


    //useState 변수는 변수값이 변경이 되면 재 랜더링이 일어남
    const [items, setItems] = useState();
    const [trTags, setTrTags] = useState();

    //랜더링이 될 때 한 번 실행
    useEffect(()=>{

        //code 만들기
   
        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + 'serviceKey=IXD5NXoWpSGmpa%2BAHRHivZDIWVOy1qFBlPANSqYvZVvR3iTezrZeQEvv0yRYFHxIojxXRzgeRfK9zYyGZm1MMQ%3D%3D';
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230524';
        url = url + '&base_time=0630';
        url = url + '&dataType=json';
        url = url + '&nx=55';
        url = url + '&ny=12';

        console.log(url);

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err))

    }, []);

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