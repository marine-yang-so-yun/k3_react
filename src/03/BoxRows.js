

const BoxRows = (probs) => {

    const mvlist = [...probs.mv];
    console.log("boxrows", mvlist);

    let trTags = [];
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
            <tr className = "mytr" key={row.movieCd}>
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
            {trTags}
        </>
    );
}

export default BoxRows;