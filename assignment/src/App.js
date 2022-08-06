
import { BelowMain } from "./components/belowMain";
import { BelowNav } from "./components/BelowNav";
import { AreaChart1 } from "./components/Charts/AreaChart1";
import { AreaChart2 } from "./components/Charts/AreaChart2";

import MainPage from "./components/MainPage";
import { Navbar } from "./components/Navbar/Navbar";

function App() {


  return (
    <div >
      <Navbar/>
      <BelowNav/>
    <MainPage/>
    <BelowMain/>
     {/* <AreaChart1/> */}
     {/* <AreaChart2/> */}
    </div>
  );
}

export default App;
