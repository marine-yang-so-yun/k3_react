import {useParams} from "react-router-dom";
const RouterPage = () => {

    const fruit = useParams().item;
    const fruit2 = useParams().item2;

    return (
        <article>
            <header><h1>RouterPage</h1></header>
            {fruit}
            {fruit2}
        </article>
    );
}

export default RouterPage;