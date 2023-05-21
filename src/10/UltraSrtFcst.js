import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import xy from "./getxy.json";
import FcstTable from "./FcstTable";

const UltraSrtFcst = () => {

    const date = useParams().item;
    const area = useParams().item2;

    const areaInfo = xy.filter((item) => {
        if (area == item.행정구역코드)  {
            console.log(item);
            return item;
        }
    }).map((item) => {
        return(item["1단계"]);
    });


    return (
        <>
        <h3>{areaInfo} 초단기예보 {date}</h3>
        <FcstTable name="초단기예보" />
        

        </>
    );

}

export default UltraSrtFcst;