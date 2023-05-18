import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstNav from './FcstNav';
import UltraSrtFcst from './UltraSrtFcst';
import VillageFcst from './VillageFcst';
import FcstMain from './FcstMain';
const Fcst = () => {

    return (
        
        <BrowserRouter>
        <main className="container">
        <FcstNav />
        <Routes>
            <Route path ='/' element={<FcstMain />} />
            <Route path ='/ultra' element={<UltraSrtFcst />} />
            <Route path = '/village' element={<VillageFcst />} />
        </Routes>
        </main>
        </BrowserRouter>
        
    );

}

export default Fcst;