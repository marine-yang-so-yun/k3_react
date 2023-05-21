import getcode from "./getcode.json";

const FcstTable = (props) => {

  const concept = props.name;

  const ops = getcode.map((item) => {

    if (item.예보구분 == concept) {return <option>{item['항목명']}({item['항목값']})</option>}
    
  }  
    
  );


    return (
      <>
        <select id = 'option'>
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
        </tbody>
        </table>
        </>
    );

}

export default FcstTable;