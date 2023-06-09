import { BrowserRouter, Routes, Route } from "react-router-dom";
import FcstNav from './FcstNav';
import UltraSrtFcst from './UltraSrtFcst';
import VillageFcst from './VillageFcst';
import FcstMain from './FcstMain';
import styles from './Fcst.module.css' ;
const Fcst = () => {

    return (
        
        <BrowserRouter>
        <main className="container">
        <FcstNav />
        <Routes>
            <Route path ='/' element={<FcstMain />} />
            <Route path ='/ultra/:item/:item2/:xValue/:yValue' element={<UltraSrtFcst />} />
            <Route path = '/village/:item/:item2/:xValue/:yValue' element={<VillageFcst />} />
        </Routes>
        </main>
        </BrowserRouter>
        
    );

}

export default Fcst;