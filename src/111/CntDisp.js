import {Link} from 'react-router-dom';
import {CntAtoms, CntAtomsTwice} from './CntAtoms';
import { useRecoilValue } from 'recoil';
const CntDisp = () => {


    const input = useRecoilValue(CntAtoms);
    const input2 = useRecoilValue(CntAtomsTwice);
    return (
        <article>
            <h1>입력값: {input} , 입력값 2배:{input2}</h1>
            <Link to='/'>입력페이지로 이동</Link>
        </article>
    );
}

export default CntDisp;