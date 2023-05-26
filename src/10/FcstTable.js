import getcode from "./getcode.json";
import { useState, useEffect } from "react";

const FcstTable = (probs) => {

  
  const concept = probs.name;
  const data = probs.items;
  const [optionValue, setOption] = useState();
  const [datas, setDatas] = useState();
  const [unit, setUnit] = useState();
  let dataTemp = [];
  console.log(concept);

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

    const optionValue1 = optionValue.split("(")[0];
    const optionValue2 = optionValue.slice(-4).replaceAll(")", "");
    
    getcode.map((item) => {
      if (optionValue2 == item.항목값) {
        setUnit(item.단위);
      }

    });

    dataTemp = data.item.map((things) => {

      if (things.category == optionValue2)  {
        
        return (
          <tr>
            <td>{optionValue1}</td>    
            <td>{things.fcstDate}</td>
            <td>{things.fcstTime}</td>
            <td>{things.fcstValue}{unit}</td>                                                            
          </tr>
        )
      }
    })
    setDatas(dataTemp);

    
}, [optionValue, unit])





  


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