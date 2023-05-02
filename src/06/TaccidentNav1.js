const TaccidentNav1 = ({c1, sel1, setsel1}) => {


    // const show = (item) => {
    //     console.log(item);
    // }

    const btTag = c1.map((item) =>
        <li key={item}>
            <button onClick = {() => setsel1(item)}>{item}</button>
        </li>
    );

    return (
        <>
            <nav>
                <ul>
                    <h1><strong>사고유형 대분류</strong></h1>
                </ul>
                <ul>
                    {btTag}
                </ul>
            </nav>
        </>
    );


}

export default TaccidentNav1;