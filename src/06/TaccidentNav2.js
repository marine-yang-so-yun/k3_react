const TaccidentNav2 = ({c2, sel1, sel2, setsel2}) => {

    const c2Arr = c2.filter((item) => item[0] === sel1);


    const show = (item) => {
        console.log(item);
    }

    const btTag = c2Arr.map((item) =>
        <li key={item}>
            <button onClick = {() => setsel2(item)}>{item}</button></li>
    );

    return (
        <>
            <nav>
                <ul>
                    <h1><strong>사고유형 중분류</strong></h1>
                </ul>
                <ul>
                    {btTag}
                </ul>
            </nav>
        </>
    );


}

export default TaccidentNav2;