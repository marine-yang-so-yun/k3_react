import code from '../10/getcode.json';
import CodeList from './CodeList';
import { useState, useEffect } from 'react';

const CodeGubun = () => {

    const [sel, setSel] = useState();
    const selItem = (e) => {
        setSel(e.target.value);
    }

    useEffect(() => {
        console.log(sel);
    }, [sel]);


    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div>
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택</option>
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>

                        <div>
                            {sel == '' ? <h3>선택하세요</h3> : <CodeList sell={sel} />}
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li></li>
                        </ul>
                    </footer>
                </form>
            </article>
        </main>
    );
}

export default CodeGubun;