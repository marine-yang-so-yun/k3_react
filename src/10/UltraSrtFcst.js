import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import { useState , useEffect} from "react";
import xy from "./getxy.json";
import FcstTable from "./FcstTable";

const UltraSrtFcst = () => {

    const date = useParams().item;
    const area = useParams().item2;
    const xValue = useParams().xValue;
    const yValue = useParams().yValue;
    const [items,setItems] = useState();

    const areaInfo = xy.filter((item) => {
        if (area == item.행정구역코드)  {

            return item;
        }
    }).map((item) => {
        return(item["1단계"]);
    });


    useEffect(() => {
        let date2 = date.replaceAll("-","");
    
    
        let url = "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=IXD5NXoWpSGmpa%2BAHRHivZDIWVOy1qFBlPANSqYvZVvR3iTezrZeQEvv0yRYFHxIojxXRzgeRfK9zYyGZm1MMQ%3D%3D&numOfRows=100&dataType=json&pageNo=1";
        url = url + "&base_date=" + date2;
        url = url + "&base_time=0630";
        url = url + "&nx=" + xValue;
        url = url + "&ny=" + yValue;
    

        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items))
        .catch((err) => console.log(err))
    
    }, []);
    



    return (
        <>
        <h3>{areaInfo} 초단기예보 {date}</h3>
        {items && <FcstTable name="초단기예보" items={items}/> }
        

        </>
    );

}

export default UltraSrtFcst;