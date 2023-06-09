import dataTaccident from './dataTaccident.json';
import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import {useState, useEffect} from 'react';

const Taccident = () => {

    const data = dataTaccident.data;
    let c1 = data.map((item) => item.사고유형_대분류);

    c1 = new Set(c1);
    c1 = [...c1];

    let c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);


    const [sel1, setsel1] = useState(0); //대분류선택
    const [sel2, setsel2] = useState([]); //중분류선택
    const [selData, setselData] = useState([]);

    useEffect(() => {
        console.log('Taccident sel1 useEffect []', sel1);
    }, []);
    useEffect(() => {
        console.log('Taccident sel1 useEffect sel1', sel1);
    } ,[sel1]);
    useEffect(() => {
        console.log('Taccident sel1 useEffect sel2', sel2);
        let temp = data.filter((item) => item.사고유형_대분류 === sel2[0]&&
        item.사고유형_중분류 == sel2[1]);
        setselData(temp[0]);
    } ,[sel2]);

    useEffect(() => {
        console.log(selData);
    }, [selData])
    
    useEffect(() => {
        console.log('Taccident sel1 useEffect', sel1);
        console.log('Taccident sel1 useEffect', sel2);
    });


    return (
        <main className="container">
            <article>
                <header>
                    <TaccidentNav1 c1={c1} sel1 = {sel1} setsel1 = {setsel1}/>
                    <TaccidentNav2 c2={c2} sel1 = {sel1} sel2 = {sel2} setsel2 = {setsel2}/>
                </header>
            </article>
        </main>

    );
}

export default Taccident;