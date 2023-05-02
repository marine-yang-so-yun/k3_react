import data from './dataFrcst.json';
import './Frcst.css';
import {useState} from "react";
const Frcst = () => {

    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const dtCn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];
    
    let dtcn = {};
    dtKey.map((item, idx) => 
        dtcn[data[item]] =  data[dtCn[idx]]
    );
   

    //상세 정보 
    
    const [dtBody, setdtBody] = useState("날짜를 선택해 주세요"); 
    const [selDt, setselDt] = useState("dateClass");

    const detail = (k) => {

        let dtcnItem = dtcn[k].split(',');
        setselDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        dtcnItem = dtcnItem.map((item) =>


            <div key={item[0]}>
            <span className="sp1">{item[0]}</span>
            {item[1].trim() == '낮음'? <span className="sp2">{item[1]}</span>
            :item[1].trim() == '보통'?<span className="sp3">{item[1]}</span>
            :<span className="sp4">{item[1]}</span>}
            </div>
        )
        console.log(dtcnItem);

        setdtBody(dtcnItem);

    }





    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item) =>
        <div className={selDt == item?"dateClass2":"dateClass"} key={item}
        onClick={() => detail(item)}>{item}</div>
    );
    
 
    return (
        <main className='container'>
            <article>
                <header>
                    <h1>초미세먼지 주간예보 ⛅</h1>
                    <div className='grid'>
                        {dtTag}                
                    </div>
                </header>
                <div className='grid'> {dtBody}</div>
               
            </article>
        
        </main>
    );
}

export default Frcst;