
import {useState} from "react";


const BoxRows = ({mv}) => {

    const mvlist = mv;
    //console.log("boxrows", mvlist);


   
    let trTags = [];
    const [trFoot, settrFoot] = useState("영화를 선택해 주세요.");

     //클릭된 자료 확인

     const showMv = (line) => {
        
        
        settrFoot("💙 ["+line.movieCd+"] "+line.movieNm + " 개봉일:" + line.openDt +" 💙");
        
    }

    
    for (let row of mvlist) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon;
        var rank = parseInt(row.rankInten);
        if (rank == 0)  {
            icon = '⏺'
        }
        else if (rank > 0)  {
            icon = '🔼'
        }
        else    {
            icon = '🔽'
        }

        trTags.push(
            <tr className = "mytr" key = {row.movieCd} onClick={()=>showMv(row)}>
            <td>{row.rank}</td>
            <td>{row.movieNm}</td>
            <td>{parseInt(row.salesAmt).toLocaleString()}</td>
            <td>{icon}{Math.abs(rank)}</td>
           

        </tr>
        );

    }

    console.log(trTags);
    return (
        <>
            <tbody>
                    {trTags}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">
                    {trFoot}
                    </td>
                </tr>
                    
            </tfoot>
        </>
    );
}

export default BoxRows;