import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RouterPage2 = () => {

    const loc = useLocation().search;
    console.log(loc);

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log(item);
    return(
        <article>
            <header><h1>RouterPage2</h1></header>
            <h1>{item}</h1>
            <h1>{item2}</h1>
        </article>
    );
}

export default RouterPage2;