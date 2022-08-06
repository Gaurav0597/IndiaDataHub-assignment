
import { BelowMain } from "./components/belowMain";
import { BelowNav } from "./components/BelowNav";
import { AreaChart1 } from "./components/Charts/AreaChart1";
import { AreaChart2 } from "./components/Charts/AreaChart2";
import Footer from "./components/Footer/Footer";

import MainPage from "./components/MainPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Paw } from "./components/Paw";

function App() {


  return (
    <div >
      {/* <Paw/> */}
      <Navbar/>
      <BelowNav/>
    <MainPage/>
    <BelowMain/>
     {/* <AreaChart1/> */}
     {/* <AreaChart2/> */}
     <Footer/>
    </div>
  );
}

export default App;
