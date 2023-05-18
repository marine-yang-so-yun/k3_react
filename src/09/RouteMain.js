import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteNav from './RouteNav';
import RouterHome from './RouterHome';
import RouterPage from './RouterPage';
import RouterPage2 from './RouterPage2';

const RouteMain = () => {


    return (
        <BrowserRouter>
        <main className="container">
            <RouteNav />
            <Routes>
                <Route path ='/' element ={<RouterHome />} />
                <Route path ='/page1/:item/:item2' element ={<RouterPage />} />
                <Route path ='/page2' element ={<RouterPage2 />} />
            </Routes>
        </main>
        </BrowserRouter>

    );
}

export default RouteMain;