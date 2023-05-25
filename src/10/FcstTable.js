import getcode from "./getcode.json";
import { useState, useEffect } from "react";

const FcstTable = (props) => {

  const concept = props.name;
  const data = props.items;
  const [optionValue, setOption] = useState();
  const [datas, setDatas] = useState();
  let dataTemp = [];
  

  const saveOption = event => {
    setOption(event.target.value);
    
   
  }

  const ops = getcode.map((item) => {

    if (item.예보구분 == concept) {
      return <option>{item['항목명']}({item['항목값']})</option>
    }
    
  });



  useEffect(() => {

    if (optionValue == null) return;

    const optionValue2 = optionValue.slice(-4).replaceAll(")", "");
    
    var temp = "";
    
    data.item.filter((things) => {

      if (things.category == optionValue2)  {
      
        dataTemp.push(<td>{things.category}</td>)
        dataTemp.push(<td>{things.baseDate}</td>)
        dataTemp.push(<td>{things.baseTime}</td>)
        dataTemp.push(<td>{things.fcstValue}</td>)
        
        console.log(things);
        setDatas(dataTemp);
      }
    })

    
}, [optionValue])


  


    return (
      <>
        <select onChange ={saveOption} id = 'option'>
          {ops}
        </select>
        <table>
        <thead>
          <tr>
            <th scope="col">항목명</th>
            <th scope="col">예측일자</th>
            <th scope="col">예측시간</th>
            <th scope="col">예보</th>

          </tr>
        </thead>
        <tbody>
          {datas}
        </tbody>
        </table>
        </>
    );

}

export default FcstTable;