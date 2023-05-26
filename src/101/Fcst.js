import { useState, useEffect } from "react";
import FcstTable from './FcstTable';
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

    return (
        <main className='container'>
            {items && <FcstTable items={items} gubun="초단기예보"/>}
        </main>

    );


}


export default Fcst;